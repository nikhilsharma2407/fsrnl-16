const mongoose = require("mongoose");
const { generateToken, verifyToken, getTokenFromHeaders } = require("../utils/jwtUtils");
const { Schema } = mongoose;
const { generatePassword, verifyPassword } = require("../utils/passwordUtil");
const { ResponseCreator } = require("../utils/responseHandler");

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "name is mandatory!!!"]
    },
    username: {
        type: String,
        unique: true,
        required: [true, "username is mandatory!!!"]
    },
    password: {
        type: String,
        validate: {
            validator: value => value.length >= 8,
            message: props => `Password should be atleast 8 characters long`
        },
        required: [true, "Password is mandatory!!!"]
    },
    friendList:[String]
});

userSchema.statics.signup = async (req, res, next) => {
    let user = req.body;
    try {
        // create hash from password

        const password = await generatePassword(user.password);
        user = { ...user, password };

        const data = await UserModel.create(user);
        if (data) {
            console.log(data);
            res.status(200);
            //   res.send({success:true,message:`user ${data.username} created successfully!!!`});
            res.send(new ResponseCreator(200, `user ${data.username} created successfully!!!`));
        }
    } catch (error) {
        console.log(error.code);
        if (error.code === 11000) {
            error.message = `user ${user.username} already exists!!!`
            error.status = 403;
        }
        next(error);
    }
};

userSchema.statics.login = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const data = (await UserModel.findOne({ username }, { _id: 0, __v: 0 })).toObject();
        if (data) {
            console.log(data);
            const passwordMatch = await verifyPassword(password, data.password);
            if (passwordMatch) {


                res.status(200);
                const { password, ...userData } = data;
                console.log(userData);
                // generate token
                const token = generateToken(userData);
                res.cookie('token',token,{httpOnly:true,maxAge:3600*1000})
                // res.send({success:true,message:`user ${data.username} logged in successfully!!!`,data});
                res.send(new ResponseCreator(200, `user ${data.username} logged in successfully!!!`, { ...data, token }));
            } else {
                ErrorCreator("Incorrect Password!!!", 401);
                // const err = new Error("Incorrect Password!!!");
                // err.status = 401;
                // throw(err);
            }
        } else {
            ErrorCreator("User doesn't exist", 404);
            // const err = new Error("User doesn't exist");
            // err.status = 404;
            // throw(err);
        }
    } catch (error) {
        next(error);
    }
};

userSchema.statics.authMiddleware = async (req, res, next)=>{
    const token = getTokenFromHeaders(req);
    try {
        const data = verifyToken(token);    
        const userData = await UserModel.findOne({username:data.username});
            if (userData) {
                res.status(200);
                console.log(userData);
                req.user = userData;
                next();
            } else {
                ErrorCreator("User doesn't exist", 404);
            }
    } catch (error) {
        error.status = 403;
        next(error);
    }
}

userSchema.statics.loginWithCookie = async (req, res, next) => {
    const token = getTokenFromHeaders(req);
    try {
        const data = verifyToken(token);
        if (data) {
            console.log(data);

            const userData = await UserModel.findOne({ username: data.username });
            if (userData) {
                res.status(200);
                console.log(userData);
                // // generate token
                // const token = generateToken(userData);
                // res.send({success:true,message:`user ${data.username} logged in successfully!!!`,data});
                res.send(new ResponseCreator(200, `user ${data.username} logged in successfully with Cookie!!!`, userData));
            } else {
                ErrorCreator("User doesn't exist", 404);
            }
        };
    }
    catch (error) {
        next(error);
    }
}

userSchema.statics.addFriend = async (req,res,next)=>{
    try {
        const {id,friendName} = req.body;
        const {username} = req.user;
        const data = await UserModel.updateOne({username},{$push:{friendList:id}});
        console.log(data);
        if(data.modifiedCount){
            res.send(new ResponseCreator(200, `${friendName} added to your Friends!!!`));
        }    
    } catch (error) {
        next(error);
    }
    
}

const UserModel = mongoose.model('User', userSchema);



module.exports = UserModel;