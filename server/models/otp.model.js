const {model,Schema} = require("mongoose");

const otpSchema = new Schema({
    otp:{
        type:String,
        required:true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "user",
        required:true
    },
    valid:{
        type: Boolean,
        default: true
    }
})

module.exports = model("otp",otpSchema);