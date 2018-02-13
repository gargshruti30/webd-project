const express=require('express');
const hbs=require('hbs');
const app=express();
const port=process.env.PORT||5000;


app.use(express.static('public'));


app.set('view engine','hbs');
app.set('views','views');//first is fixed...we can change seconds views to any directory;

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    next();
});
app.get('/',(req,res)=>{
   res.render('main',{})
});


app.get('/main',function(req,res){
    let xhr= require('xmlhttprequest').XMLHttpRequest;
    let xhttp= new xhr();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
        {
            let x=this.responseText;
            res.render('index2',{data:x});

        }
    };
    xhttp.open("GET", `https://www.googleapis.com/books/v1/volumes?q=${req.query.val}`, true);
    xhttp.send();
});
app.listen(port,function(){
    console.log("application running on port "+port);

});