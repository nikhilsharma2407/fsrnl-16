const express  = require('express');
const UserModel = require("../models/userModel")
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.send("User Router")
})
router.post('/signup',UserModel.signup)
router.post('/login',UserModel.login)
router.get('/login',UserModel.loginWithCookie)

module.exports = router;