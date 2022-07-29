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
      // const res = await axios.post("http://localhost:8080/auth/login", login);

      // console.log(res, "res");

      const {data} = await axios.post("http://localhost:8080/auth/login",login);

      let payload = data.user;
      payload.token = data.token;

      localStorage.setItem("userInformation",JSON.stringify(payload));

      if (data) {
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
      <div style={{display:'flex'}}>
        <Stack spacing={3}>
          <Alert status="success" variant="subtle" height='50px' width="400px" marginTop="-140px">
            <AlertIcon />
            Login Successful
          </Alert>
        </Stack>
       
        <div className={Styles.home} >
          <h1 style={{marginTop:'10px',fontWeight:'bold'}} onClick={() => {
            navigate("/chat");
          }}>OK</h1>
        </div>
      </div>

        <div className={Styles.main1}>
        <h2 className={Styles.div2}>Login</h2>
          <div className={Styles.div}>
            
            <h3>Email</h3>
            <input
              className={Styles.input}
              type="text"
              placeholder="Enter Email Address"
              name="email"
              onChange={handleChange}
            />
          </div>

          <div className={Styles.div}>
          <h3>Password</h3>
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
          <Alert status="error" width="480px" height='50px' marginTop="-140px" >
            <AlertIcon />
            Wrong Credentials
          </Alert>
        </Stack>
        <div className={Styles.main1}>
        <h2 className={Styles.div2}>Login</h2>
          <div className={Styles.div}>
           
            <h3>Email</h3>
            <input
              className={Styles.input}
              type="text"
              placeholder="Enter Email Address"
              name="email"
              onChange={handleChange}
            />
          </div>

          <div className={Styles.div}>
          <h3>Password</h3>
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
      <h2 className={Styles.div2}>Login</h2>
        <div className={Styles.div}>
         
          <h3>Email</h3>
          <input
            className={Styles.input}
            type="text"
            placeholder="Enter Email Address"
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className={Styles.div}>
        <h3>Password</h3>
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
