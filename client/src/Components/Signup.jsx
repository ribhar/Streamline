import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Styles from "./Styles.module.css"
import { Button, ButtonGroup } from '@chakra-ui/react'

const Signup = () => {

    const[register,setRegister] = useState([])

    const navigate = useNavigate()


    const handleChange = (e) => {
        e.preventDefault()
        const input=e.target.name
        
        setRegister({...register,[input]:e.target.value})
    }
    console.log(register,"register details")

    
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log("hello")
        // setSend([register])
        // axios.post("",register)
        // navigate("/login")
    }


  return (

    <div className={Styles.main}
    style={{margin:'auto',width:'300px'
    ,marginTop:'10%'}}>


{/* <svg  width="100" height="40" backgroundColor="red" color="red">
      <BasisCurve backgroundColor="red"
        data={[
          [0, 20],
          [50, 35],
          [100, 0],
        ]}
      />
    </svg> */}

    <div className={Styles.div2}>
      <h2>Sign Up</h2>
    </div>
    
    <div className={Styles.div}>
      <h3>Username</h3>
    <input style={{backgroundColor:'white'}} 
    type="text" placeholder='username' name="Name" required onChange={handleChange}/>
    </div>

    <div className={Styles.div}>
      <h3>Email</h3>
        <input style={{backgroundColor:'white'}}
         type="text" placeholder='email'  name="Email" required onChange={handleChange}/>
    </div>

    <div className={Styles.div}>
      <h3>Password</h3>
       <input style={{backgroundColor:'white'}}
        type="password" placeholder='Password'  name="Password" required onChange={handleChange}/>
    </div>


    <div className={Styles.signup}>
    <button onClick={handleSubmit}>Sign Up</button>
    </div>


    {/* <Button colorScheme='teal' size='lg'>
    Button
   </Button> */}

    </div>

  )
}

export default Signup
