import React, { useState } from "react";
import {
  InputLabel,
  Button,
  Grid,
  Typography,
  Box,
  TextField,
} from "@material-ui/core";

const Form = ({ handleAddTodo }) => {
  const [todo, setTodo] = useState("");

  const handleOnClick = (event, todo) => {
    event.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  };

  return (
    <>
      <Box width="50%" boxShadow={3} margin="auto" p={3}>
        <Typography variant="h6" gutterBottom>
          What are you accomplishing today?
        </Typography>
        <Grid container spacing={1} mb={3}>
          <TextField
            fullWidth
            margin="normal"
            name="to do"
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
          />
          <Button
            variant="outlined"
            mt={2}
            onClick={(event) => handleOnClick(event, todo)}
          >
            Add this to your list
          </Button>
        </Grid>
      </Box>
    </>
  );
};

export default Form;
