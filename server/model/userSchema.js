const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    about:{
        type:String,
        required:true
    }
})


const User = mongoose.model('USER',userSchema);
module.exports = User;