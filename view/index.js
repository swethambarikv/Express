const express = require("express")
const app = express();


// Set the View Engine or Template Engine
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render("index");
})
 
app.get("/user", function(req,res){
  const user = {
    name: "Swethambari V",
    stack: "MEAN",
    email: "swethambarikv@gmail.com",
    hObby: ["singing", "playing", "reading", "philosoph"]
  }
  res.render("user", {user});
})