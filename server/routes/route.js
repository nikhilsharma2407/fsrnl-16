const express  = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log(req.path);
    res.status(200);
    res.send("in the router middleware");
});

router.get('/test',(req,res,next)=>{
    console.log(req.path);
    res.status(200);
    res.send("success!!!");
});

router.get('/ab?cd',(req,res,next)=>{
    // matches - abcd acd
    console.log(req.path);
    res.status(200);
    res.send("ab?cd");
});
router.get('/ab|cd',(req,res,next)=>{
    // matches - ab or cd 
    console.log(req.path);
    res.status(200);
    res.send("ab|cd");
});

router.get('/ab+cd',(req,res,next)=>{
    // matches - abbbbbbbcd abcd abbb<any number of times>cd
    console.log(req.path);
    res.status(200);
    res.send("ab|cd");
});

router.get('/flights/:from-:to',(req,res,next)=>{
    console.log(req.params.from);
    console.log(req.params.to);
    res.status(200);
    res.send(req.params);
});

router.get('/user/:id',(req,res,next)=>{
    // /user/123
    console.log(req.path);
    console.log(req.params);
    res.status(200);
    res.send(req.params);
});

router.get('/product',(req,res,next)=>{
    // /user/123
    console.log(req.path);
    console.log(req.query);
    res.status(200);
    res.send(req.query);
});

router.post('/user',(req,res,next)=>{
    const {body} = req;
    const userId = 123;
    console.log(body);
    res.send({message:`User created with id ${userId}`,data:body,success:true});
})

router.all('/*',(req,res,next)=>{
    const {path,method} = req;
    console.log(req.path);
    res.status(404);
    let err = new Error("path doesn't exist");
    err.status = 404;
    next(err);
});


module.exports = router;


// http://localhost:4000/test