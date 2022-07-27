const express = require('express');
 
const app = express();
 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
 
app.get('/',(req,res)=>{
    res.send("Hello")
})
 
app.listen(8080,(req,res)=>{
    console.log(`Server started at port 8080`)
})