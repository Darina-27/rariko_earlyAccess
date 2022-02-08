import React, { useState } from "react";
import {
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import "./home.css";
import { countryList } from "../data/coutnries";
const useStyles = makeStyles(() => ({
  heading: {
    fontFamily: "Red Hat Text",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "64px",
    lineHeight: "70px",
  },
  button: {
    background: "transparent",
    border: "3px solid #FFFFFF",
    borderRadius: "5px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "30px",
    lineHeight: "35px",
    letterSpacing: "0.05em",
    color: "#FFFFFF",
    marginTop: "2rem",
    padding: "0.5rem",
  },
}));
const handleEarlyAccess = () => {};

export default function Home() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("Select Your Country");
  return (
    <Container style={{ minHeight: "100vh" }}>
      <div style={{ display: "flex" }} id="home">
        <div
          style={{
            marginTop: "20vh",
            height: "60vh",
          }}
        >
          <Typography
            className={classes.heading}
            style={{
              color: "#FFFFFF",
            }}
          >
            One Stop for your every
          </Typography>
          <Typography className={classes.heading} style={{ color: "red" }}>
            CRYPTO NEEDS
          </Typography>
        </div>

        <div>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "space-evenly",
              padding: "3rem",
            }}
          >
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            >
              {countryList.map((country, index) => {
                return (
                  <option value={country} key={index}>
                    {country}
                  </option>
                );
              })}
            </select>
            <button
              className={classes.button}
              onClick={() => handleEarlyAccess()}
            >
              Get Early Access
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}
