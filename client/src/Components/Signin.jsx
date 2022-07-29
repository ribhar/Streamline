import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./Styles.module.css";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";

const Signin = () => {
  const [login, setLogin] = useState([]);
  const navigate = useNavigate();
  const [status, setStatus] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    const input = e.target.name;

    setLogin({ ...login, [input]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log(login, "login");

    try {
      const res = await axios.post("http://localhost:8080/auth/login", login);

      console.log(res, "res");

      if (res) {
        setStatus(true);
        // alert("login successfull")
      }
    } catch (err) {
      setStatus(false);
    }
  };

  if (status === true) {
    return (
      <>
        <Stack spacing={3}>
          <Alert status="success" variant="subtle" width="200px" margin="auto">
            <AlertIcon />
            Login Successful
          </Alert>
        </Stack>
        <h1
          className={Styles.home}
          onClick={() => {
            navigate("/");
          }}
        >
          go to home
        </h1>
        <div className={Styles.main1}>
          <div className={Styles.div}>
            <h2 className={Styles.div2}>Login</h2>
            <input
              className={Styles.input}
              type="text"
              placeholder="Enter Email Address"
              name="email"
              onChange={handleChange}
            />
          </div>

          <div className={Styles.div}>
            <input
              className={Styles.input}
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleChange}
            />
          </div>

          <div className={Styles.signup}>
            <button onClick={handleSubmit}>Sign In</button>
          </div>
        </div>
      </>
    );
  }

  if (status === false) {
    return (
      <>
        <Stack spacing={3}>
          <Alert status="error" width="200px" margin="auto">
            <AlertIcon />
            Wrong Credentials
          </Alert>
        </Stack>
        <div className={Styles.main1}>
          <div className={Styles.div}>
            <h2 className={Styles.div2}>Login</h2>
            <input
              className={Styles.input}
              type="text"
              placeholder="Enter Email Address"
              name="email"
              onChange={handleChange}
            />
          </div>

          <div className={Styles.div}>
            <input
              className={Styles.input}
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleChange}
            />
          </div>

          <div className={Styles.signup}>
            <button onClick={handleSubmit}>Sign In</button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className={Styles.main1}>
        <div className={Styles.div}>
          <h2 className={Styles.div2}>Login</h2>
          <input
            className={Styles.input}
            type="text"
            placeholder="Enter Email Address"
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className={Styles.div}>
          <input
            className={Styles.input}
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={handleChange}
          />
        </div>

        <div className={Styles.signup}>
          <button onClick={handleSubmit}>Sign In</button>
        </div>
      </div>
    </>
  );
};

export default Signin;
