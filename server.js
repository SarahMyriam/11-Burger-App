//===DEPENDENCIES===================================================
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars') 

var PORT = process.env.PORT || 8080;

var app = express();

//===SERVE STATIC CONTENT FOR THE APP FROM THE PUBLIC DIRECTORY=====
app.use(express.static('public'));

//===PARSE APPLICATION BODY AS JSON====================
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//===IMPORTING ROUTES AND GIVING THE SERVER ACCESS TO THEM=====
var routes = require('./controllers/burgerController.js');
app.use(routes);

//===RUNNING THE SERVER SO IT CAN BEGIN LISTENING TO CLIENTS REQUESTS=======
app.listen(PORT, function(){
    console.log('Server listening on: http://localhost:' + PORT);
});

