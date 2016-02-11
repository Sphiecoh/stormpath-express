var express = require('express');
var stormpath = require('express-stormpath');

var app = express();
var profile = require('./profile')();
console.log(profile);
app.set('views','./views');
app.set('view engine','jade');

app.use(stormpath.init(app,{ website : true , expand:{customdata : true }}));

app.get('/',function(req,res){
	res.render('home',{ title :'Welcome'});
});
app.get('/test',function(req,res){
    res.send('send');
});
app.get('/profile',stormpath.loginRequired,profile);

app.on('stormpath.ready',function(){
	console.log('Storm path ready');
	app.listen(3000);
});