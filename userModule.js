const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        default: null
    }
},{ timestamps:true });

const User = mongoose.model('user',newSchema);

module.exports = User;