var express = require('express');
var app = express();
var handlebars = require('express-handlebars')
    .create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/about', function(req, res){
    res.render('about');
});

// пользовательская страница 404
app.use(function(req, res, next){
    res.status(404);
    res.send('404');
});
// пользовательская страница 500
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.send('500');
});
app.listen(app.get('port'), function(){
    console.log( 'Express запущен на http://localhost:' +
        app.get('port') + '; нажмите Ctrl+C для завершения.' );
});