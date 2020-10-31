//===CONNECTING TO MYSQL======================================
var mySQL = require('mysql');
 
connection = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Lavillette',
    database: 'burgers_db' 
})

//===MAKING THE CONNECTION======================================
connection.connect(function(err){
    if(err){
        console.error('error connecting: '+ err.stack);
        return;
    };
    console.log('connected as id ' + connection.threadId);
});

//===EXPORTING CONNECTION FOR THE ORM TO USE=====================
module.exports = connection;