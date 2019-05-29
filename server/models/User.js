const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    username:{
        type: String,
        require:true
    },
    password:{
        type: String,
        require:true
    },
    admin:{
        type:Boolean,
        required:true
    }
})

module.exports = mongoose.model('User',User);