const express = require("express");
const { getAllMessages, sendMessage } = require("../controllers/message.controller");
const { authMiddleware } = require("../middleware/authMiddleware");

const messageRouter = express.Router();

messageRouter.get("/getAllMessages/:chatId",authMiddleware,getAllMessages);
messageRouter.post("/send",authMiddleware,sendMessage);

module.exports = messageRouter;