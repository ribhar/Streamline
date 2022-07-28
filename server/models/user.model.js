const {model,Schema} = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new Schema({
    username:{
        type:String,
        required:[true,"Please enter your name"],
        maxlength: [30,"Username cannot exceed 30 characters"],
        minLength: [4,"Username should have more than 4 characters"]
    },
    email:{
        type: String,
        required:[true,"Please enter your email"],
        unique: true,
        validate:[validator.isEmail,"Please enter a valid Email"]
    },
    password:{
        type:String,
        required:[true,"Please enter your password"],
        minlength:[8,"Password should be greater than 8 characters"],
        select: false
    },
    isAvatarImageSet:{
        type: Boolean,
        default: false,
    },
    avatarImage:{
        type: String,
        default: "",
    },
    isAdmin:{
        type: Boolean,
        required: true,
        default:false
    }
},
{timestamps:true}
)

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password,10);
})

userSchema.methods.getJWTToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRE
    })
}

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}

module.exports = model("user",userSchema);