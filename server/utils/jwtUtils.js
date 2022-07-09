const {sign,decode,verify} = require("jsonwebtoken");
const {SECRET_KEY} = process.env
const generateToken = (data)=>{
    const token = sign(data,SECRET_KEY,{expiresIn:"15m"});
    console.log(token);
    return token
}

const verifyToken = (token)=>{
    return verify(token,SECRET_KEY);
}

const getTokenFromHeaders = (req)=>{
    const token = req.cookies.token;
    console.log("Token from cookies",token);
    return token;
    // const { headers: { authorization } } = req
    // if(authorization){
    //     const [, token] = authorization?.split(" ");
    //     return token;
    // };
}


module.exports = {generateToken,verifyToken,getTokenFromHeaders}