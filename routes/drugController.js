const express = require('express');
const router = express.Router()
const Model = require('../model/drugSchema');

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
        amount : req.body.amount
    })

    data.save()
    .then(resp=>res.send(resp))
    .catch(err=> res.send(err))
});

// Delete
router.delete('/delete/:id', (req, res) => {
    let id =req.params.id
    
    Model.deleteOne({_id:id})
    .then(resp =>res.send('Drug data with : '+id+' has been Deleted'))
    .catch(err=>err)

});

// Update
router.put('/update/:id',(req,res)=>{

    Model.findByIdAndUpdate({_id:req.params.id},{$set:{name:req.body.name, amount: req.body.amount}})
    .then(docs=>res.send('Data already Updated'))
    .catch(err=>res.send('Gagal'))

})



module.exports = router