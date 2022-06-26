class ResponseCreator{
    constructor(status,message,data){
        this.status = status<=400;
        this.message = message;
        if(data)
            this.data = data;
    }
}


const ErrorCreator = (message,status)=>{
    const err = new Error(message);
    err.status = status;
    throw(err);   
}

module.exports = {ResponseCreator,ErrorCreator};