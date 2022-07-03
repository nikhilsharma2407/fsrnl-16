const express  = require('express');
const UserModel = require("../models/userModel")
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.send("User Router")
})
router.post('/signup',UserModel.signup);
router.post('/login',UserModel.login);
router.get('/login',UserModel.loginWithCookie);
router.post('/addFriend',UserModel.authMiddleware,UserModel.addFriend);
router.post('/removeFriend',UserModel.authMiddleware,UserModel.removeFriend);
router.get('/logout',UserModel.authMiddleware,UserModel.logout);

module.exports = router;