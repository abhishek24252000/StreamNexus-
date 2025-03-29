// require('dotenv').config({path:'/env'});
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({ path: "./env" });

import express from "express";
const app=express();

connectDB().then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running on port ${process.env.PORT || 8000}`)
    })
}).catch(()=>{
    console.log("error in connecting to database");
})