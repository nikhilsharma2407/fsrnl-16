const fs = require('fs');

const errLogger = (err,req,res,next)=>{
    
    const timestamp = new Date();
    const {path, method} = req;
    console.log(timestamp,path,method);
    console.log(err.stack);
    const data = `${err.message} ${path} ${method}\n`;

    fs.appendFile('./errLogs.txt',data,(logErr)=>{
        if(logErr){
            console.error(logErr);
        }else{
            const {message="request failed",status=500} = err
            res.status(status);
            res.send({message,success:false});
        }
    });


};


module.exports = errLogger
