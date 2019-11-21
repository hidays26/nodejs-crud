const express = require('express');
const router = express.Router()
const Model = require('../model/doctorSchema');

// Read
router.get('/view', (req, res) => {
    Model.find()
    .then(resp => res.send(resp))
    .catch(err=>err)
});

// Create
router.post('/add', (req, res) => {
    let data = new Model({
        name: req.body.name,
        age: req.body.age,
        gender : req.body.gender
    })

    data.save()
    .then(resp=>res.send(resp))
    .catch(err=> res.send(err))
});

// Delete
router.delete('/delete/:id', (req, res) => {
    let id =req.params.id
    
    Model.deleteOne({_id:id})
    .then(() =>res.send('data doctor id : '+id+' has been deleted'))
    .catch(err=>err)

});

// Update
router.put('/update/:id',(req,res)=>{

    Model.findByIdAndUpdate({_id:req.params.id},
        {$set:{
            name:req.body.name,
            age: req.body.age,
            gender: req.body.gender
        }})
    .then(docs=>res.send('data already Updated'))
    .catch(err=>res.send('Gagal'))

})



module.exports = router