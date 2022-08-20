import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./Styles.module.css";
// import {
//   Alert,
//   AlertIcon,
//   AlertTitle,
//   AlertDescription,
// } from "@chakra-ui/react";
// import { , HStack, VStack } from "@chakra-ui/react";
import {
  Stack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

const Signin = () => {
  const toast = useToast();
  const [login, setLogin] = useState([]);
  const navigate = useNavigate();
  const [status, setStatus] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    const input = e.target.name;

    setLogin({ ...login, [input]: e.target.value });
  };

    const handleSubmit = async() => {
      try {
        const {data} = await axios.post("https://streamlinenine.herokuapp.com/auth/login",login);

      let payload = data.user;
      payload.token = data.token;

      localStorage.setItem("userInformation",JSON.stringify(payload));

      if (data) {
        setStatus(true);
        toast({
          title: `Login Successfull`,
          status: 'success',
          position: 'top',
          isClosable: true,
        })
        // alert("login successfull")
        setTimeout(() => {
          navigate("/chat");
        }, 4000);
      }
    } catch (err) {
      toast({
        title: `Wrong Credentials`,
        status: 'error',
        position: 'top',
        isClosable: true,
      })
    }
  };
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
}

export default Signin
