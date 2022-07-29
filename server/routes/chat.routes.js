const express = require("express");
const { createGroup, accessChat, fetchChats, renameGroup, removeFromGroup, addToGroup } = require("../controllers/chat.controller");
const { authMiddleware } = require("../middleware/authMiddleware");

const chatRouter = express.Router();

chatRouter.get("/",authMiddleware,fetchChats);
chatRouter.post("/",authMiddleware,accessChat);
chatRouter.post("/group",authMiddleware,createGroup);
chatRouter.put("/renameGroup",authMiddleware,renameGroup);
chatRouter.put("/removeFromGroup",authMiddleware,removeFromGroup);
chatRouter.put("/addToGroup",authMiddleware,addToGroup);

module.exports = chatRouter;