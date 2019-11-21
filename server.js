const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

let mongoUrl = "mongodb://localhost:27017/crud"
mongoose
    .connect(mongoUrl,{useNewUrlParser:true})
    .then(()=>console.log('Mongo dah jalan'))
    .catch(err=>err)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

let drug = require('./routes/drugController');
app.use('/drug',drug);

let doctor = require('./routes/doctorController');
app.use('/doctor',doctor);

let patient = require('./routes/patientSchema');
app.use('/patient',patient);

app.listen(port, () => console.log(`Example app listening on port port!`))