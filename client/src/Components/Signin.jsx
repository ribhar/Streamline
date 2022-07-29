import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Styles from "./Styles.module.css"

const Signin = () => {

    const[login,setLogin] = useState([])
    const navigate = useNavigate()


    const handleChange = (e) => {
        e.preventDefault()
        const input=e.target.name
        
        setLogin({...login,[input]:e.target.value})
    }

  

    const handleSubmit = async() => {
      console.log(login,"login")
      try {
        const {data} = await axios.post("http://localhost:8080/auth/login",login);
        console.log(data)

        let payload = data.user;
        payload.token = data.token;

        localStorage.setItem("userInformation",JSON.stringify(payload));
        
        alert("login successfull")
        navigate("/chat")
      } catch (error) {
        alert("Something Went Wrong")
        console.log(error);
      }
    }
 
 

  return (

    <div className={Styles.main}>
        
    <div className={Styles.div}>
    <h2 className={Styles.div2}>Login</h2>
         <input className={Styles.input} type="text" placeholder='Enter Email Address' name="email"  onChange={handleChange}/>
    </div>

    <div className={Styles.div}>
       <input className={Styles.input}  type="password" placeholder='Enter Password'  name="password" onChange={handleChange}/>
    </div>


    <div className={Styles.signup} >
    <button onClick={handleSubmit}>Sign In</button>
    </div>

</div>
 
  )
}

export default Signin
