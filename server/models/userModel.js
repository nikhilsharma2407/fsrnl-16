const mongoose = require("mongoose");
const { Schema } = mongoose;


const userSchema = new Schema({
    name:{
        type:String,
        required:[true,"name is mandatory!!!"]
    },
    username:{
        type:String,
        unique:true,
        required:[true,"username is mandatory!!!"]
    },
    password:{
        type:String,
        validate:{
            validator:value => value.length>=8,
            message: props => `Password should be atleast 8 characters long`
        },
        required:[true,"Password is mandatory!!!"]
    }
  });
  
  userSchema.statics.signup = async (req,res,next)=>{
      const user = req.body;
      try {
          const data = await UserModel.create(user);   
          if(data){
              console.log(data);
              res.status(200);
              res.send({success:true,message:`user ${data.username} created successfully!!!`});
          }        
      } catch (error) {
        console.log(error.code);
        if(error.code===11000){
            error.message = `user ${user.username} already exists!!!`
            error.status = 403;
        }
          next(error);
      }
  };

  userSchema.statics.login = async (req,res,next)=>{
      const {username,password} = req.body;
      try {
          const data = (await UserModel.findOne({username},{_id:0,__v:0})).toObject();    
          if(data){
              console.log(data);
              if(data.password === password){
                res.status(200);
                const {password,...userData} = data;
                console.log(userData);
                res.send({success:true,message:`user ${data.username} logged in successfully!!!`,data:userData});
              }else{
                const err = new Error("Incorrect Password!!!");
                err.status = 401;
                throw(err);
              }
          }else{
            const err = new Error("User doesn't exist");
            err.status = 404;
            throw(err);
          }    
      } catch (error) {
          next(error);
      }
  };
  

  
  
  const UserModel = mongoose.model('User', userSchema);  
  
  

module.exports = UserModel;