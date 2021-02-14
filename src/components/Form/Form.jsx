import React, { useState } from "react";
import {
  InputLabel,
  Input,
  Button,
  Grid,
  Typography,
  Box,
  TextField,
  Paper,
  FormControl,
} from "@material-ui/core";
import useStyles from "./styles";

const Form = ({ handleAddTodo }) => {
  const classes = useStyles();
  const [todo, setTodo] = useState("");

  const handleOnClick = (event, todo) => {
    event.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  };

  return (
    <>
      <Box width="50%" boxShadow={3} margin="auto" p={5}>
        <Grid container spacing={5} mb={3}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              What are you accomplishing today?
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <form>
              <FormControl fullWidth style={{ paddingBottom: "15px" }}>
                <InputLabel>Add a todo</InputLabel>
                <Input
                  name="to do"
                  value={todo}
                  onChange={(event) => setTodo(event.target.value)}
                />
              </FormControl>
              <Button
                className={classes.button}
                disabled={!todo}
                variant="contained"
                color="primary"
                onClick={(event) => handleOnClick(event, todo)}
                type="submit"
              >
                Add this task to your day
              </Button>
            </form>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Form;
