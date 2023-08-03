const mongoose = require("mongoose")

require("dotenv").config();
console.log(process.env.DATABASE_URL,"string");
const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL
    ).then(()=>{
        console.log("Connected to database")
    })
    .catch((error)=>{
        console.log("Error connecting to");
        console.log(error);
    })
}

module.exports = dbConnect;