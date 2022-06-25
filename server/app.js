const express  = require('express');
const app = express();

const db = require("./dbConnection");
const router = require("./routes/route");
const userRouter = require("./routes/userRouter");
const errLogger = require('./utils/errLogger');
const reqLogger = require("./utils/requestLogger");

// used for parsing the body
app.use(express.json());

// used for logging all requests
app.use("/",reqLogger);

// route middlewares
app.use('/api',router)
app.use('/user',userRouter)

app.use(errLogger)
app.listen(4000,()=>{
    console.clear()
    console.log("server running on port 4000");
})