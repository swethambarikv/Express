var express = require("express");
var app = express();
var products =require('./routes/products');

app.use('/products',products);

app.post("/create-users",(req,res)=>{
    res.send("Details of Employees:");
});
app.put("/update-users",(req,res)=>{
    res.send("Details of Employees:");
});
app.get("/get-users",(req,res)=>{

    var details = {
       name: "swetha",
       id: 549,
       practice: "LAMP",
       active: true
    }
   
       res.send(details);
   });
app.delete("/delete-users",(req,res)=>{
    res.send("Details of Employees:");
});   
app.listen(4000);