import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Styles from "./Styles.module.css"
import { Button, ButtonGroup } from '@chakra-ui/react'
import Otp from './Otp'


const Signup = () => {
    const [showOtp,setShowOtp] = useState(false);
    const[register,setRegister] = useState([])
    const[id,setId] = useState("")

    const navigate = useNavigate()


    const handleChange = (e) => {
        e.preventDefault()
        const input=e.target.name
        
        setRegister({...register,[input]:e.target.value})
    }
    // console.log(register,"register details")

    
    const handleSubmit = async() => {
      
        // console.log("hello")
        try{
         await axios.post("https://streamline-eight.herokuapp.com/auth/register",register).then(({data}) =>{
            console.log(data,"data")

           
            setId(data.user._id);
            setShowOtp(!showOtp);
            // var x = data.user._id

            // console.log(x,"x")

            // navigate(`/verify/${x}`)
           
          })


        }catch(err)
        {
          console.log(err)
        } 
    }


  return (

    <div className={Styles.main}>


    <div className={Styles.div2}>
      <h2>Sign Up</h2>
    </div>
    
    <div className={Styles.div}>
      <h3>Username</h3>
    <input className={Styles.input} 
    type="text" placeholder='Enter Username' name="username" required onChange={handleChange}/>
    </div>

    <div className={Styles.div}>
      <h3>Email</h3>
        <input className={Styles.input} 
         type="text" placeholder='Enter Email Address'  name="email" required onChange={handleChange}/>
    </div>

    <div className={Styles.div}>
      <h3>Password</h3>
       <input className={Styles.input} 
        type="password" placeholder='Enter Password'  name="password" required onChange={handleChange}/>
    </div>

    {/* <div className={Styles.div}>
      <h3>Confirm Password</h3>
       <input className={Styles.input} 
        type="password" placeholder='Confirm Password'  name="Password" required onChange={handleChange}/>
    </div> */}



    <div className={Styles.signup}>
    <button onClick={handleSubmit}>Sign Up</button>
    </div>

 {showOtp && <div>
        <Otp id={id}/>
    </div> }

    </div>

  )
}

export default Signup