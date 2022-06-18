const express  = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.send("User Router")
})

router.post('/createuser',(req,res,next)=>{
    const {body} = req
    res.send({message:"user created successfully!!!",data:body})
})

module.exports = router;