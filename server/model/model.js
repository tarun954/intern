const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    gender : String,
    hobbies :{
        type: String,
        required:true
    } 
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;