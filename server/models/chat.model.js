const {model,Schema} = require("mongoose");

const chatSchema = new Schema({
    chatName:{
        type: String,
        trim: true,
    },
    isGroupChat:{
        type: Boolean,
        default: false,
    },
    users:[{
        type: Schema.Types.ObjectId,
        ref: "user",
        required:true
    }],
    latestMessage:{
        type: Schema.Types.ObjectId,
        ref: "message"
    },
    groupAdmin:{
        type: Schema.Types.ObjectId,
        ref: "user"
    }
},
{timestamps:true}
)

module.exports = model("chat",chatSchema);