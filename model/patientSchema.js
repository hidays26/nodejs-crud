const mongoose = require('mongoose');

let patientData = new mongoose.Schema({
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
    checkIn:{
        type: Date,
        default: Date.now()
    }
})

module.exports = Patient = mongoose.model('patients',patientData)