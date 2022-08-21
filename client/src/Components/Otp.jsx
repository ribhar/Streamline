import React from "react";
import { PinInput, PinInputField } from "@chakra-ui/react";

import { useState } from "react";
import Styles from "./Styles.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";

const Otp = ({id}) => {
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [otp5, setOtp5] = useState("");
  const [otp6, setOtp6] = useState("");
  const navigate = useNavigate();
  const [status, setStatus] = useState();

  const handleSubmit = async () => {
    const otp = "" + otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
    console.log(otp, "otp");

    try {

      const {data} = await axios.post(`https://streamlinenine.herokuapp.com/auth/checkOtp/${id}`,{otp:otp});
            
        let payload = data.user;
        payload.token = data.token;

        localStorage.setItem("userInformation",JSON.stringify(payload));

    
      if (data) {
       
        setStatus(true);
      }
    } catch (err) {
      setStatus(false);
    }
  };

  const [counter, setCounter] = useState(30);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);


  const resend = async (Reg) => {
    // console.log(Reg,"rr")
    // setResendData([...Reg])
    // console.log(resendData,"resend")
    // try {
    //     await axios
    //       .post("https://streamlinenine.herokuapp.com/auth/register",resendData)
    //       .then(({ data }) => {
    //         console.log(data, "data");
    //       });
    //   } catch (err) {
    //     console.log(err);
    //   }
  };

  if (status === false) {
    return (
      <>
        <Stack spacing={3}>
          <Alert status="error" width="480px" height='45px' marginTop="-426px">
            <AlertIcon />
            Please enter a valid OTP
          </Alert>
        </Stack>

        <div className={Styles.mainOtp}>

          <div style={{marginTop: "auto"}}>
              <p style={{
                // textAlign:'center',
                marginTop: "auto",
                color:'teal',fontWeight:'bold'}}>Enter OTP</p>
          </div>

          <div style={{ marginTop: "12px" }} className={Styles.otpinput}>
            <HStack>
              <PinInput>
                <PinInputField
                  // style={{ width: "90px" }}
                  width={{ base: '90px', md: '60px', sm: '40px' }}
                  onChange={(e) => setOtp1(e.target.value)}
                />
                <PinInputField
                  // style={{ width: "90px" }}
                  width={{ base: '90px', md: '60px', sm: '40px' }}
                  onChange={(e) => setOtp2(e.target.value)}
                />
                <PinInputField
                  // style={{ width: "90px" }}
                  width={{ base: '90px', md: '60px', sm: '40px' }}
                  onChange={(e) => setOtp3(e.target.value)}
                />
                <PinInputField
                  // style={{ width: "90px" }}
                  width={{ base: '90px', md: '60px', sm: '40px' }}
                  onChange={(e) => setOtp4(e.target.value)}
                />
                <PinInputField
                  // style={{ width: "90px" }}
                  width={{ base: '90px', md: '60px', sm: '40px' }}
                  onChange={(e) => setOtp5(e.target.value)}
                />
                <PinInputField
                  // style={{ width: "90px" }}
                  width={{ base: '90px', md: '60px', sm: '40px' }}
                  onChange={(e) => setOtp6(e.target.value)}
                />
              </PinInput>
            </HStack>
          </div>
          <div className={Styles.signup}>
            <button onClick={handleSubmit}>Verify</button>
          </div>
          <div className={Styles.resend}>
            <h1>00:{counter}</h1>

            <div>
              <button  className={Styles.reqbtn} onClick={resend}>Request OTP</button>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (status === true) {
    return (
      <>
      <div style={{display:'flex'}}>
        <Stack spacing={3}>
          <Alert status="success" variant="subtle" height='50px' width="400px" marginTop="-430px">
            <AlertIcon />
            Login Successful
          </Alert>
        </Stack>
        <div className={Styles.home1} >
          <h1 style={{marginTop:'10px',fontWeight:'bold'}} onClick={() => {
            navigate("/chat");
          }}>OK</h1>
        </div>
        </div>
     
      </>
    );
  }

  return (
    <>
      <div className={Styles.mainOtp}>
        <div>
          <p style={{textAlign:'center',color:'teal',fontWeight:'bold'}}>Enter OTP</p>
        </div>

        <div style={{ marginTop: "12px" }} className={Styles.otpinput}>
          <HStack>
            <PinInput>
              <PinInputField
                style={{ width: "90px" }}
                onChange={(e) => setOtp1(e.target.value)}
              />
              <PinInputField
                style={{ width: "90px" }}
                onChange={(e) => setOtp2(e.target.value)}
              />
              <PinInputField
                style={{ width: "90px" }}
                onChange={(e) => setOtp3(e.target.value)}
              />
              <PinInputField
                style={{ width: "90px" }}
                onChange={(e) => setOtp4(e.target.value)}
              />
              <PinInputField
                style={{ width: "90px" }}
                onChange={(e) => setOtp5(e.target.value)}
              />
              <PinInputField
                style={{ width: "90px" }}
                onChange={(e) => setOtp6(e.target.value)}
              />
            </PinInput>
          </HStack>
        </div>
        <div className={Styles.signup}>
          <button onClick={handleSubmit}>Verify</button>
        </div>

        <div className={Styles.resend}>
          <h1>00:{counter}</h1>

          <div >
            <button className={Styles.reqbtn} onClick={resend}>Request OTP</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
