import React, { useState, useContext, useEffect } from "react";
import { Box, Typography, Grid, Button, Checkbox } from "@material-ui/core";
import { AppContext } from "../../AppContext";
import database from "../../firebase";
import EditIcon from "@material-ui/icons/Edit";
import Editmodal from "../Editmodal/Editmodal";

const Todolist = () => {
  const { currentUser, todolist, removeTodo, setTodolist } = useContext(
    AppContext
  );
  const [modal, setModal] = useState(false);
  const [editId, setEditId] = useState("");
  const [edit, setEdit] = useState("");

  //fetch todos from firebase upon mounting
  useEffect(() => {
    //sort by timestamp, descending -> when the object or 'todo' created in the firebase
    database
      .collection(`${currentUser.displayName}'s todos`)
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodolist(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
          }))
        );
      });
  }, []);

  const handleModal = (event, todo) => {
    event.preventDefault();
    setEdit(todo.todo);
    setEditId(todo.id);
    setModal(true);
  };

  console.log(currentUser);

  const handleChange = (event, todo) => {
    event.preventDefault();
    removeTodo(todo);
  };

  return (
    <div>
      <Box width="50%" boxShadow={3} margin="auto" p={3}>
        {!todolist.length ? (
          <Typography>No more tasks for the day</Typography>
        ) : (
          <Grid container spacing={3}>
            {todolist.map((todo) => (
              <Grid key={todo.id} container>
                <Grid item>
                  <Checkbox
                    color="primary"
                    onChange={(event) => handleChange(event, todo.id)}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h6">{todo.todo}</Typography>
                </Grid>
                <Grid item>
                  <Button
                    type="button"
                    onClick={(event) => handleModal(event, todo)}
                  >
                    <EditIcon fontSize="small" />
                  </Button>
                </Grid>
              </Grid>
            ))}
            <Editmodal
              modal={modal}
              edit={edit}
              setEdit={setEdit}
              setModal={setModal}
              editId={editId}
            />
          </Grid>
        )}
      </Box>
    </div>
  );
};

export default Todolist;
