var mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required: true
    },
    d_n:{
        type:String,
        required:true
    },
    DOB: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
    }, 
    height: {
        type: Number,
    }, 
    activity: {
        type: String
    }
    //pfp: String,
},{timestamps:true})

module.exports = mongoose.model("user", UserSchema);