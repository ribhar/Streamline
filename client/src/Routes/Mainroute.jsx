import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Signup from '../Components/Signup'
import Signin from "../Components/Signin"
import Otp from '../Components/Otp'
import JoinCreateTeam from '../Pages/JoinCreateTeam'

const Mainroute = () => {
  return (
    <div>
      <Routes>
            <Route path="/" element={<JoinCreateTeam/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Signin/>}/>
            <Route path="/verify/:id" element={<Otp/>}/>
      </Routes>
    </div>
  )
}

export default Mainroute
