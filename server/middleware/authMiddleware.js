const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

exports.authMiddleware = async(req, res,next)=>{
    let token = req.headers.authorization.split(" ")[1];
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = await User.findOne({_id:decoded.id});
        next();
    }catch(error){
        res.status(401).json({msg:"Not authorized"})
    }
}