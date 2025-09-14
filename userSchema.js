const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    }
});

const user = mongoose.model('user',schema) 

module.exports = user;




























// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         lowercase: true
//     }
// });

// const User = mongoose.model('user', userSchema);

// module.exports = User;