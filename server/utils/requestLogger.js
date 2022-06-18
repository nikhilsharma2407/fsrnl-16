const fs = require('fs');

const logger = (req,res,next)=>{
    const timestamp = new Date();
    const {path, method} = req;
    console.log(timestamp,path,method);
    const data = `${timestamp} ${path} ${method}\n`;

    fs.appendFile('./requestLogs.txt',data,(err)=>{
        if(err){
            console.error(err);
        }else{
            next();
        }
    });


};


module.exports = logger
