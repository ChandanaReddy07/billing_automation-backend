const mongoose = require("mongoose");
const { Number } = require("twilio/lib/twiml/VoiceResponse");


const userSchema2 = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
  
   
    name: {
        type: String
    },
    email: {
            type: String,
            required: true,
            unique: true,  
    }
});
module.exports = mongoose.model('User', userSchema2);
