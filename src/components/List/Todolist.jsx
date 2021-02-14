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
        <Grid container spacing={3}>
          {todolist.length > 0 ? (
            todolist.map((todo) => (
              <Grid container item xs={12} spacing={3} key={todo}>
                <Checkbox
                  color="primary"
                  onChange={(event) => handleChange(event, todo)}
                />
                <Typography variant="h6">{todo}</Typography>
              </Grid>
            ))
          ) : (
            <Typography variant="subtitle1" color="textSecondary" align="left">
              Seems like a pretty chill day today.. Let's get productive. Add an
              item.
            </Typography>
          )}
        </Grid>
      </Box>
    </>
  );
};

export default Todolist;
