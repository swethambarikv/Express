var express = require("express"); //requiring express module
var app = express(); //creating express instance

app.set("view engine","ejs");
  
app.get("/", function(req, res) {
  res.send("hello");
});
app.listen(3000, function() {
  console.log("Node server is running..");
});
