const {sign,decode,verify} = require("jsonwebtoken");
const generateToken = (data)=>{
    const token = sign(data,"test",{expiresIn:"10s"});
    console.log(token);
    return token
}

const verifyToken = (token)=>{
    return verify(token,"test");
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