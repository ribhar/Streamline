import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signin = () => {

    const[login,setLogin] = useState([])
    const navigate = useNavigate()

    const handleChange = (e) => {
        e.preventDefault()
        const input=e.target.name
        
        setLogin({...login,[input]:e.target.value})
    }

    console.log(login,"login")

    const handleSubmit = (e) => {
        // e.preventDefault()
        axios.post("",login)
    }
 
 

  return (

    <div>
        
    <div>
    <h2>Welcome Back</h2>
         <input type="text" placeholder='Name' name="Name"  onChange={handleChange}/>
    </div>

    <div >
       <input type="password" placeholder='Password'  name="Password" onChange={handleChange}/>
    </div>


    <div>
    <button onClick={handleSubmit}>Sign In</button>
    </div>

</div>
 
  )
}

export default Signin
