const mongoose = require("mongoose");

const mongo_url = process.env.MONGO_URL;

mongoose.connect(mongo_url)
    .then(()=>{
        console.log("Mongo db Connected !!!");
    })
    .catch((err)=>{
        console.log(err);
    })
