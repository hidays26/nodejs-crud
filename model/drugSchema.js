const mongoose = require('mongoose');

let drugData = new mongoose.Schema({
    name:{
        type: String
    },
    amount:{
        type: String,
        unique: true,
        required: true
    }
})

module.exports = Drug = mongoose.model("drugs",drugData)