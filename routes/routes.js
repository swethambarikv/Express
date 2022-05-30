var express = require('express');
var app = express();
var port = 4400;
  
// Multiple routing
var router1 = express.Router();
var router2 = express.Router();
var router3 = express.Router();
     
router1.get('/user', function (req, res, next) {
    console.log("User Router Working");
    res.end();
});
   
router2.get('/admin', function (req, res, next) {
    console.log("Admin Router Working");
    res.end();
});
  
router2.get('/student', function (req, res, next) {
    console.log("Student Router Working");
    res.end();
});
  
app.use(router1);
app.use(router2);
app.use(router3);
   
app.listen(port, function(err){
    if (err) console.log(err);
    console.log("Server listening on port", port);
});
// app.listen(4400,()=>{
//     console.log("Server is running");
// });