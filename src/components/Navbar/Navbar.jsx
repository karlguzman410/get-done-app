import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./styles";
import todoLogo from "../../assets/todoLogo.jpg";

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src={todoLogo}
              alt="Get done logo"
              height="50px"
              className={classes.image}
            />
            Get done ✅
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
