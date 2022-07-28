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

const Otp = () => {
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [otp5, setOtp5] = useState("");
  const [otp6, setOtp6] = useState("");
  const navigate = useNavigate();
  const [status, setStatus] = useState();
  //   const [resendData,setResendData] = useState([])

  const { id } = useParams();

  const handleSubmit = async () => {
    const otp = "" + otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
    console.log(otp, "otp");

    try {
      const res = await axios.post(
        `http://localhost:8080/auth/checkOtp/${id}`,
        { otp: otp }
      );

      // console.log(res.data.token,"res")

      var token = res.data.token;
      if (res) {
        localStorage.setItem("token", JSON.stringify(token));
        setStatus(true);
        // alert("user registered successfully")

        // navigate("/")
      }
    } catch (err) {
      // alert("Inavlid Otp")
      setStatus(false);
    }
  };

  ///the counter
  const [counter, setCounter] = useState(30);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  //   console.log(timer, "count");

  //resend
  // useEffect(() => {
  //     const Reg = JSON.stringify(localStorage.getItem('register'))
  //     console.log(Reg,"reg")
  //     resend(Reg)

  // },[])

  const resend = async (Reg) => {
    // console.log(Reg,"rr")
    // setResendData([...Reg])
    // console.log(resendData,"resend")
    // try {
    //     await axios
    //       .post("http://localhost:8080/auth/register",resendData)
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
          <Alert status="error" width="200px" margin="auto">
            <AlertIcon />
            Enter a valid OTP
          </Alert>
        </Stack>

        <div className={Styles.mainOtp}>
          <div>
            <h2 className={Styles.div2}>Enter OTP</h2>
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

            <div className={Styles.reqbtn}>
              <button onClick={resend}>Request OTP</button>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (status === true) {
    return (
      <>
        <Stack spacing={3}>
          <Alert status="success" variant="subtle" width="200px" margin="auto">
            <AlertIcon />
            Login Successful
          </Alert>
        </Stack>
        <h1
          className={Styles.home}
          onClick={() => {
            navigate("/");
          }}
        >
          go to home
        </h1>
        <div className={Styles.mainOtp}>
          <div>
            <h2 className={Styles.div2}>Enter OTP</h2>
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
        </div>
      </>
    );
  }

  return (
    <>
      <div className={Styles.mainOtp}>
        <div>
          <h2 className={Styles.div2}>Enter OTP</h2>
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

          <div className={Styles.reqbtn}>
            <button onClick={resend}>Request OTP</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
