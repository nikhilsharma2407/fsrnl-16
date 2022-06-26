const express  = require('express');
const UserModel = require("../models/userModel");
const { ResponseCreator } = require('../utils/responseHandler');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.send("User Router")
})
router.get('/getdata',(req,res,next)=>{
    res.status(200);
    res.send(new ResponseCreator(200,"admin data",{adminData:"dummy data"}));
})

module.exports = router;