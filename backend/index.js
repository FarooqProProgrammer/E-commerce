const express = require("express")
const cors = require("cors")
const product = require("./Routes/Product")
const db = require("./config/db")

const app = express()
app.use(express.json())
app.use(cors())
db.then((res)=>{
    console.log("connecyion Sucess");
}).catch((erro)=>{
    console.log("Some Error");
})
app.use("/",product)


app.listen(3100 , ()=>{
    console.log(`http://localhost:3100`);
})