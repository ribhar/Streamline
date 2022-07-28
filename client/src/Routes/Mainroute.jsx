import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Signup from '../Components/Signup'
import Signin from "../Components/Signin"

const Mainroute = () => {
  return (
    <div>
      <Routes>
            <Route path="signup" element={<Signup/>}/>
            <Route path="login" element={<Signin/>}/>
      </Routes>
    </div>
  )
}

export default Mainroute
