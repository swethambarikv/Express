const express=require('express');
const app=express();
let alert=require('alert');
const router=express.Router();

app.get('/Error',(req,res,next)=>//*-->means that given path does not match
//this executed only when error occurs and pass to error handling middleware.
{
    console.log('error');
    let err=new Error("page not found");
    next(err);
});


app.use((req,res,next)=>
{
    alert("welcome");
    console.log('Requested url is '+req.url);
    next();
});

app.get('/',(req,res,next)=>
{
    console.log('Home page');
    res.send('Welcome to Express.js');
    next();//now back middleware works
});
app.get('/routerpage',(req,res,next)=>
{
    console.log('Router page');
    res.send('Welcome to Router page');
    next();//now back middleware works
});
router.get('/contact',(req,res,next)=>//simple contact path will not work if mounted path 'routerpage' is not there-->(2)
{
    console.log('Contact page');
    res.send('Welcome to contact page');
    next();//now back middleware works
});
router.get('/exit',(req,res,next)=>//same like contact path 
{
    console.log('Exit page');
    res.send('Exiting from Express.js');
    next();//now back middleware works
});
app.use('/routerpage',router);//router is mounted on path 'routerpage'-->(1)

app.use((req,res,next)=>//this middleware does not work if next is not given in app.get as it comes after that.
{
    alert("exit");
    console.log("Exited");
    next();
});


app.use((err,req,res,next)=>//error handling middleware
{
    console.error(err.stack);
    res.send("Page not found");
});


app.listen(7000,()=>
{
    console.log('Server running');
});