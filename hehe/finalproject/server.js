const express=require('express');
const hbs=require('hbs');
const app=express();
const port=process.env.PORT||5000;
const bodyParser=require('body-parser');

const passport=require('passport');
const passportLocal=require('passport-local').Strategy;
const cookieParser=require('cookie-parser');
const session=require('express-session');
const userconfig=require('./userconfig.json');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({secret:'cat is here'}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'));
app.set('view engine','hbs');
app.set('views','views');

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    next();
});
app.get('/',(req,res)=>{
    res.render('login',{});
});


app.post('/login',passport.authenticate('local',
    {
        successRedirect:'/abcd',
        failureRedirect:'/'
    }
));

passport.use(new passportLocal(
    function(username,password,done){
        console.log(username);
        console.log(password);
        if(username!=userconfig.username)
        {   console.log("invalid username");
            return done(null,false);}
        if(password!=userconfig.password)
        {    console.log("invalid password");
            return  done(null,false);}

        return done(null,userconfig.id);
    }
));

passport.serializeUser(function(id, done) {
    console.log("serialize");
    return  done(null, id);
});

passport.deserializeUser(function(id, done) {
    console.log("deserialize");
    if(userconfig.id==id)
    { return  done(null, userconfig.username);}
});
app.get('/abcd',function(req,res){
    console.log("shruti ka abcd");
    res.render('main',{});

});





// app.get('/login',(req,res)=>{
//     console.log("a");
//     res.render('main',{});
// });

app.get('/main',function(req,res){
    let xhr= require('xmlhttprequest').XMLHttpRequest;
    let xhttp= new xhr();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
        {
            let x=this.responseText;
            res.render('index2',{data:JSON.parse(x)});

        }
    };
    // let y=JSON.parse(req.query.val);
    console.log((req.query.val));
    xhttp.open("GET", `https://www.googleapis.com/books/v1/volumes/${req.query.val}`, true);
    xhttp.send();

});
app.listen(port,function(){
    console.log("application running on port "+port);

});