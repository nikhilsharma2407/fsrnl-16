const mongoose = require('mongoose');
const DB_URL = process.env.DB_URL;
console.log(DB_URL);
(async()=>{
    try {
        const data = await mongoose.connect(DB_URL);
        console.log("connected to db");
    } catch (error) {
        console.log(error);
    }
})();