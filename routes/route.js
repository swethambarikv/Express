const express = require('express');
const app = express();



app.get('/home', (req, res, next) => {
    console.log('Started ...')
    next()
  }, (req, res) => {
    res.send('Hello Everyone')
})

app.listen(7000,()=>{
    console.log("Server is running");
})
