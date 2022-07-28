import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Signup from '../Components/Signup'
import Signin from "../Components/Signin"
import Otp from '../Components/Otp'
import JoinCreateTeam from '../Pages/JoinCreateTeam'
import HomePage from '../Pages/HomePage'
import ChatPage from '../Pages/ChatPage'

const Mainroute = () => {
  return (
    <div className="bg-teal-800 h-[120vh]">
      <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/chat" element={<ChatPage/>}/>
      </Routes>
    </div>
  )
}

export default Mainroute
