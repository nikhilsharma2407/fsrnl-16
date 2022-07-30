const express  = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const db = require("./dbConnection");
const router = require("./routes/route");
const userRouter = require("./routes/userRouter");
const adminRouter = require("./routes/admin");
const errLogger = require('./utils/errLogger');
const reqLogger = require("./utils/requestLogger");
const authMiddleware  = require('./models/userModel').authMiddleware;
const cookieParser = require("cookie-parser");
const cors = require("cors");
// used for parsing the body

const corsConfig = {
    origin: 'https://gfg-ui.herokuapp.com/',
    credentials:true
};
app.use(cors(corsConfig))
app.use(express.json());
app.use(cookieParser())
// used for logging all requests
app.use("/",reqLogger);

// route middlewares
app.use('/api',router)
app.use('/user',userRouter)
app.use('/admin',authMiddleware,adminRouter)

app.use(errLogger)
app.listen(process.env.PORT,()=>{
    console.clear()
    console.log("server running on port 4000");
})