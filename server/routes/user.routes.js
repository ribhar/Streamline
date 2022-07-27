const express = require("express");
const { registerUser, loginUser, checkOtp } = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.post("/register",registerUser);
userRouter.post("/login",loginUser);
userRouter.post("/checkOtp/:id",checkOtp);

module.exports = userRouter;