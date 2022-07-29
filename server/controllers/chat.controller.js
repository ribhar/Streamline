const Chat = require("../models/chat.model");
const User = require("../models/user.model.js");

exports.createGroup = async (req, res, next) => {
  if (!req.body.users || !req.body.chatName) {
    return res.status(400).send({ msg: "Please fill all fields" });
  }
  var users = JSON.parse(req.body.users);
  if (users.length < 2)
    return res.status(400).json({ msg: "More than 2 users are allowed" });
  users.push(req.user);
  try {
    const groupChat = await Chat.create({
      chatName: req.body.chatName,
      users: users,
      isGroupChat: true,
      groupAdmin: req.user,
    });
    const fullGroupChat = await Chat.findOne({ _id: groupChat._id })
      .populate("users")
      .populate("groupAdmin");
    res.status(200).json(fullGroupChat);
  } catch (error) {
    next(error);
  }
};

exports.accessChat = async (req, res, next) => {
  const { userId } = req.body;
  if (!userId) {
    return res.sendStatus(400);
  }
  let isChat = await Chat.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate("users")
    .populate("latestMessage");

  isChat = await User.populate(isChat, {
    path: "latestMessage.sender",
    select: "username email",
  });

  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    var chatData = {
      chatName: "anything",
      isGroupChat: false,
      users: [req.user._id, userId],
    };
  }
  try {
    const createdChat = await Chat.create(chatData);
    const fullChat = await Chat.findOne({ _id: createdChat._id }).populate(
      "users"
    );
    res.status(200).json(fullChat);
  } catch (error) {
    next(error);
  }
};

exports.fetchChats = async (req, res, next) => {
  try {
    let results = await Chat.find({
      users: { $elemMatch: { $eq: req.user._id } },
    })
      .populate("users")
      .populate("groupAdmin")
      .populate("latestMessage")
      .sort({ updatedAt: -1 });
    results = await User.populate(results, {
      path: "latestMessage.sender",
      select: "username email",
    });
    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
};


exports.renameGroup = async(req,res,next)=>{
  try {
    const {chatId,chatName} = req.body;
    const updatedChat = await Chat.findByIdAndUpdate(chatId,{chatName:chatName},{new:true}).populate("users").populate("groupAdmin");
    if(!updatedChat){
      return res.status(404).json({msg:"Chat Not Found"})
    }
    return res.status(201).json(updatedChat);
  } catch (error) {
    next(error)
  }
}

exports.removeFromGroup = async (req, res, next) => {
  try {
    const {chatId,userId} = req.body;
    const removed = await Chat.findByIdAndUpdate(chatId,{$pull:{users:userId}},{new: true}).populate("users").populate("groupAdmin");
    if(!removed){
      return res.status(404).json({msg:"Chat Not Foun"})
    }
    return res.status(200).json(removed);
  } catch (error) {
    next(error);
  }
}

exports.addToGroup = async (req, res, next) => {
  try {
    const {chatId,userId} = req.body;
    const added = await Chat.findByIdAndUpdate(chatId,{$push:{users:userId}},{new:true}).populate("users").populate("groupAdmin");
    if(!added) return res.status(404).json({msg:"Chat Not Found"});
    return res.status(200).json(added);
  } catch (error) {
    next(error)
  }
}
