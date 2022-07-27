const User = require("../models/user.model");
const OTP = require("../models/otp.model");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");

exports.registerUser = async(req,res,next)=>{
    try {
        const {username,email,password} = req.body;
        const userCheck = await User.findOne({username});
        if(userCheck){
            return res.status(400).json({
                msg:"User already exist",
                status: false
            })
        }
        const emailCheck = await User.findOne({email});
        if(emailCheck){
            return res.status(400).json({
                msg:"Email already exist",
                status: false
            })
        }
        const user = await User.create(req.body);
        const otp = Math.floor(100000+Math.random()*90000);
        const oneTime = await OTP.create({otp,user:user._id})
        console.log(oneTime)
        await sendEmail({
            email,
            subject: "Trinity OTP",
            message: `Your OTP is ${otp}`
        })
        res.status(201).json({status:true,user})
    } catch (error) {
        next(error)
    }
}

exports.loginUser = async(req, res,next)=>{
    try {
        const {email,password} = req.body;
        if(!email || !password)  return res.status(400).json({msg:"Please Enter Email & Password"})

        const user = await User.findOne({email}).select("+password");

        if(!user) return res.status(401).json({msg:"Invalid email or Password"});

        const isPasswordMatched = await user.comparePassword(password);

        if(!isPasswordMatched) return res.status(401).json({msg:"Invalid email or Password"});

        sendToken(user,200,res);
    } catch (error) {
        next(error)
    }
}

exports.checkOtp = async(req, res,next)=>{
    try {
        const userId = req.params.id;

        const enteredOtp = req.body.otp;

        const otpCheck = await OTP.findOne({user:userId});

        if(!otpCheck || enteredOtp!==otpCheck.otp) return res.status(401).json({msg:"Invalid OTP"})

        await OTP.deleteOne({user:userId});

        const user = await User.findOne({_id:userId})
        
        sendToken(user,201,res)
    } catch (error) {
        next(error)
    }
}