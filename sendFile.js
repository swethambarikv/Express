const express = require('express')
const app = express();
app.get('/file/:name', function (req, res, next) {
    var fileName = req.params.name
    res.sendFile(__dirname+"/"+fileName,  function (err) {
        if (err) {
            next(err)
        } else {
            console.log('Sent:', fileName)
        }
    })
})

app.use((err, req, res, next) =>//error handling middleware
{
    console.error(err.stack);
    res.send("Oops...File not found");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
})