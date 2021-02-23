import React, { useContext } from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { AppContext } from "../../AppContext";
import todoLogo from "../../assets/todoLogo.jpg";

const Navbar = () => {
  const classes = useStyles();
  const { handleLogout } = useContext(AppContext);

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
            ✅ Get done ✅
          </Typography>
          <Button onClick={(event) => handleLogout(event)}>Logout</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
