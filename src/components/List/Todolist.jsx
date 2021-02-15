import React from "react";
import { Box, Typography, Grid, Button, Checkbox } from "@material-ui/core";

const Todolist = ({ todolist, removeTodo }) => {
  const handleChange = (event, todo) => {
    event.preventDefault();
    removeTodo(todo);
  };

  return (
    <>
      <Box width="50%" boxShadow={3} margin="auto" p={3}>
        {!todolist.length ? (
          <Typography>No more tasks for the day</Typography>
        ) : (
          <Grid container spacing={3}>
            {todolist.map((todo) => (
              <Grid container item xs={12} spacing={3} key={todo.id}>
                <Checkbox
                  color="primary"
                  onChange={(event) => handleChange(event, todo.id)}
                />
                <Typography variant="h6">{todo.todo}</Typography>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
};

export default Todolist;
