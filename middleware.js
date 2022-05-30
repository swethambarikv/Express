const express = require('express')
const app = express()

const funct = function (req, res, next) {
    console.log('Logged')
    next()
}

app.use(funct)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//Middleware for specific route "/home"
app.use('/home', function (req, res, next) {
    console.log("Received");
    next()
});
app.get('/home', function (req, res) {
    res.send('Have a nice day!!');
});


app.listen(3000, () => {
    console.log('Server listening on port 3000 :')
});