const mongoose = require('mongoose');

(async()=>{
    try {
        const data = await mongoose.connect('mongodb://localhost:27017/test');
        console.log("connected to db");
    } catch (error) {
        console.log(error);
    }
})();