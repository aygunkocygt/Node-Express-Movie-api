const  mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        minlength:5
    }
 });

module.exports = mongoose.model('user',UserSchema);