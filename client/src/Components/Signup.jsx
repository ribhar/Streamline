import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./Styles.module.css";


const Signup = () => {
  const [register, setRegister] = useState([]);
  const [id, setId] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const input = e.target.name;

    setRegister({ ...register, [input]: e.target.value });
  };
  // console.log(register,"register details")
  localStorage.setItem("register", JSON.stringify(register));

  const handleSubmit = async () => {
    // console.log("hello")
    try {
      await axios
        .post("http://localhost:8080/auth/register", register)
        .then(({ data }) => {
          console.log(data, "data");

          setId(data.user._id);
          var x = data.user._id;

          console.log(x, "x");

          navigate(`/verify/${x}`);
        });
    } catch (err) {
      console.log(err);
    }
    console.log(id, "id");
  };

  return (
    <div className={Styles.main}>
      <div className={Styles.div2}>
        <h2>Sign Up</h2>
      </div>

      <div className={Styles.div}>
        <h3>Username</h3>
        <input
          className={Styles.input}
          type="text"
          placeholder="Enter Username"
          name="username"
          required
          onChange={handleChange}
        />
      </div>

      <div className={Styles.div}>
        <h3>Email</h3>
        <input
          className={Styles.input}
          type="text"
          placeholder="Enter Email Address"
          name="email"
          required
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
          required
          onChange={handleChange}
        />
      </div>

      {/* <div className={Styles.div}>
      <h3>Confirm Password</h3>
       <input className={Styles.input} 
        type="password" placeholder='Confirm Password'  name="Password" required onChange={handleChange}/>
    </div> */}

      <div className={Styles.signup}>
        <button onClick={handleSubmit}>Sign Up</button>
      </div>

      <div style={{ marginTop: "10px" }} className={Styles.signup}>
        <p>Already have an account ?</p>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Signup;
