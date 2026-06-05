import express from "express"
import dbconnect from "./config/Connectdb.js"
import dotenv from 'dotenv'
const app = express()
dotenv.config()
app.get("/",(req,res)=>{
    return res.json({message:"Server Started"})
})
const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}`);
    dbconnect()
})