const {model,Schema} = require("mongoose");

const messageSchema = new Schema({
    sender:{
        type: Schema.Types.ObjectId,
        ref: "user",
    },
    content:{
        type: String,
        trim: true,
    },
    chat:{
        type: Schema.Types.ObjectId,
        ref: "chat"
    }
},
{timestamps:true}
);

module.exports = model("message",messageSchema);