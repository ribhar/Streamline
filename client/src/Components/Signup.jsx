import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Styles from "./Styles.module.css"
import { Button, ButtonGroup } from '@chakra-ui/react'
import Otp from './Otp';
import {
  Stack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';


const Signup = () => {
    const toast = useToast();
    const [showOtp,setShowOtp] = useState(false);
    const[register,setRegister] = useState([])
    const[id,setId] = useState("");
    const [status,setStatus] = useState();

    const navigate = useNavigate();


    const handleChange = (e) => {
        e.preventDefault()
        const input=e.target.name
        
        setRegister({...register,[input]:e.target.value})
    }
    // console.log(register,"register details")

    
    const handleSubmit = async() => {
      
        // console.log("hello")
        try{
         await axios.post("https://streamlinenine.herokuapp.com/auth/register",register).then(({data}) =>{
            setId(data.user._id);
            setShowOtp(!showOtp);
            // var x = data.user._id

            // console.log(x,"x")

            // navigate(`/verify/${x}`)
           
          })


        }catch(err)
        {
          toast({
            title: `User already exist`,
            status: 'error',
            position: 'top',
            isClosable: true,
          })
          console.log(err)
        } 
    }

// if(status === false)
// return(
//   <>
//     <Stack spacing={3}>
//           <Alert status="error" width="480px" height='50px' marginTop="-140px" >
//             <AlertIcon />
//             User already exist
//           </Alert>
//         </Stack>
  
//   <div className={Styles.main}>


//   <div className={Styles.div2}>
//     <h2>Sign Up</h2>
//   </div>
  
//   <div className={Styles.div}>
//     <h3>Username</h3>
//   <input className={Styles.input} 
//   type="text" placeholder='Enter Username' name="username" required onChange={handleChange}/>
//   </div>

//   <div className={Styles.div}>
//     <h3>Email</h3>
//       <input className={Styles.input} 
//        type="text" placeholder='Enter Email Address'  name="email" required onChange={handleChange}/>
//   </div>

//   <div className={Styles.div}>
//     <h3>Password</h3>
//      <input className={Styles.input} 
//       type="password" placeholder='Enter Password'  name="password" required onChange={handleChange}/>
//   </div>

//   {/* <div className={Styles.div}>
//     <h3>Confirm Password</h3>
//      <input className={Styles.input} 
//       type="password" placeholder='Confirm Password'  name="Password" required onChange={handleChange}/>
//   </div> */}



//   <div className={Styles.signup}>
//   <button onClick={handleSubmit}>Sign Up</button>
//   </div>

// {showOtp && <div>
//       <Otp id={id}/>
//   </div> }

//   </div>
//   </>
// )
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