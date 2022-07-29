const Message = require("../models/message.model");
const User = require("../models/user.model");
const Chat = require("../models/chat.model");

exports.getAllMessages = async(req, res,next)=>{
    try {
        const messages = await Message.find({chat: req.params.chatId}).populate("sender","name email").populate("chat");
        res.status(200).json(messages);
    } catch (error) {
        next(error)
    }
}

exports.sendMessage = async(req, res,next)=>{
    const {content,chat} = req.body;
    if(!content || !chat){
        return res.sendStatus(400);
    }
    let newMessage = {
        sender: req.user._id,
        content: content,
        chat: chat
    };
    try{
        let message = await Message.create(newMessage);
        message = await message.populate("sender","username");
        message = await message.populate("chat");
        message = await User.populate(message,{
            path: "chat.users",
            select: "username email",
        })
        await Chat.findByIdAndUpdate(req.body.chat,{latestMessage:message});
        res.json(message);
    }catch(error){
        next(error)
    }
}