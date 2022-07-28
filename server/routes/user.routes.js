const express = require("express");
const { registerUser, loginUser, checkOtp, getAllUsers, getUserDetails, logout } = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.post("/register",registerUser);
userRouter.post("/login",loginUser);
userRouter.post("/checkOtp/:id",checkOtp);
userRouter.get("/getAllUsers",getAllUsers);
userRouter.get("/getUserDetails",getUserDetails);
userRouter.get("/logout",logout)

module.exports = userRouter;