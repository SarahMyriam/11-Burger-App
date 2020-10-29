var mySQL = require('mysql');
 
connection = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Lavillette',
    database: 'burgers_db' 
})

connection.connect(function(err){
    if(err){
        console.error('error connecting: ' err.stack);
        return
    };
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;