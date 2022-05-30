const express=require('express')
let app=express()
app.set('view engine','ejs')


app.get('/',(req,res)=>
{
    res.send("Hello")
});

app.get('/home',(req,res)=>{
    var Name = "Tony"
    res.render('staticFiles',{Name})
})


app.use(express.static('public'))

app.listen(3000, () => {
    console.log('Server listening on port 3000 :')
});