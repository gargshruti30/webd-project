const express=require('express');
const hbs=require('hbs');
const app=express();
app.get('/',express.static('public'));
const port=process.env.PORT||5000;

app.set('view engine','hbs');
app.set('views','views');//first is fixed...we can change seconds views to any directory;

app.get('/',function(req,res){
    res.render('index',{data:"hello world"});
});
app.listen(port,function(){
    console.log("application running on port "+port);

});