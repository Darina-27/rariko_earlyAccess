import {
  AppBar,
  Container,
  createTheme,
  makeStyles,
  ThemeProvider,
  Toolbar,
} from "@material-ui/core";
import React from "react";
import "./navbar.css";
const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});
const useStyles = makeStyles(() => ({
  navBar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color="transparent">
        <Container>
          <Toolbar className={classes.navBar}>
            <div className="logoContainer">
              {/* <img src="/imag/rairkoLogo.png" alt="rarikoImg" /> */}
            </div>
            <div className="navLinks">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#team">Team</a>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
