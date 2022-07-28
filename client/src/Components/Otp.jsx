import React from 'react'
import { PinInput, PinInputField } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import Styles from "./Styles.module.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Otp = ({id}) => {
    const[otp1,setOtp1] = useState("")
    const[otp2,setOtp2] = useState("")
    const[otp3,setOtp3] = useState("")
    const[otp4,setOtp4] = useState("")
    const[otp5,setOtp5] = useState("")
    const[otp6,setOtp6] = useState("")
    const navigate = useNavigate()
    
    const handleSubmit = async() => {
        const otp=""+otp1+otp2+otp3+otp4+otp5+otp6
        console.log(otp,'otp')
        try {
            const {data} = await axios.post(`http://localhost:8080/auth/checkOtp/${id}`,{otp:otp});
            
        let payload = data.user;
        payload.token = data.token;

        localStorage.setItem("userInformation",JSON.stringify(payload));
        
        alert("registration successfull")
        navigate("/chat")
        } catch (error) {
            alert("wrong OTP")
            console.log(error);
        }
        

        
        // console.log(id)
        // var token = res.data.token
        // if(res)
        // {
        //     localStorage.setItem("token", JSON.stringify(token));
        //     alert("user registered successfully")
            
        //     navigate("/")

        // }
    }

  return (
    <div className={Styles.mainOtp}>
    <div>
       <h2 className={Styles.div2}>Enter OTP</h2>
    </div>

    <div style={{marginTop:"12px"}} className={Styles.otpinput}>
    <HStack>
        <PinInput>
            <PinInputField style={{width:'90px'}} onChange={(e) => setOtp1(e.target.value)} />
            <PinInputField style={{width:'90px'}} onChange={(e) => setOtp2(e.target.value)}/>
            <PinInputField style={{width:'90px'}} onChange={(e) => setOtp3(e.target.value)}/>
            <PinInputField style={{width:'90px'}} onChange={(e) => setOtp4(e.target.value)}/>
            <PinInputField style={{width:'90px'}} onChange={(e) => setOtp5(e.target.value)}/>
            <PinInputField style={{width:'90px'}} onChange={(e) => setOtp6(e.target.value)}/>
    
    </PinInput>
    </HStack>

    </div>
        <div className={Styles.signup}>
        <button onClick={handleSubmit}>Verify</button>
        </div>
    </div>
  )
}

export default Otp
