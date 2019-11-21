const mongoose = require('mongoose');

let doctorData = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    age:{
        type: String,
        require: true
    },
    gender:{
        type: String,
        require: true
    },
})

module.exports = Doctor = mongoose.model('doctors',doctorData)