require("dotenv").config();
const express = require("express");
const app = express();

const router= require("./router/auth-router");
app.use(express.json());  
app.use("/api/auth",router);
const connectDB= require("./utils/db.js")


const PORT = 5000;

connectDB().then(()=>{
    app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);

});

})