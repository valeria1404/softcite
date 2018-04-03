var express = require('express');
var mongoose     = require ('mongoose');

var app = express();

app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",function(req,res){
 res.render('index');
});

app.get("/index",function(req,res){
 res.render('index');
});

app.get("/login",function(req,res){
 res.render('login');
});

app.get("/citas/:id?",function(req,res){
  var params = req.id;
  /*find a mongodb*/
  res.render('citas',{
    name_user : "hola"
  });
});



app.listen(4080);
console.log("ya está corriendo mi servidor");

mongoose.connect('mongodb://localhost/users', function(error){
   if(error){
    console.log('No se  Conecto a MongoDB');
   }else{
      console.log('Conectado a MongoDB');
   }
});

module.exports = app;
