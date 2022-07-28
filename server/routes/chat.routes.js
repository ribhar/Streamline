const express = require("express");
const { createGroup, accessChat, fetchChats } = require("../controllers/chat.controller");
const { authMiddleware } = require("../middleware/authMiddleware");

const chatRouter = express.Router();

chatRouter.get("/",authMiddleware,fetchChats);
chatRouter.post("/",authMiddleware,accessChat);
chatRouter.post("/group",authMiddleware,createGroup);

module.exports = chatRouter;