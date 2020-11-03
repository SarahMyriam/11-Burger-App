//===IMPORTING MYSQL CONNECTION==================================
var connection = require('../connection.js');

function createQmarks(Number){
    var arr = [];
    for(var i = 0; i < Number; i ++){
        arr.push('?');
    }
    return arr.toString();
}
//===CONVERTING OBJECT PAIRS TO SQL SYNTAX=======================
function translateSQL(obj){
    var arr = [];
    for(var key in obj){
        var value = obj[key];
        if(Object.hasOwnProperty.call(obj, key)) {
            if(typeof value === 'string' && value.indexOf(' ') >= 0){
                value = " ' " + value + " ' ";
            }
            arr.push(key + " = " + value)
        }
    }
    return arr.toString();
}

var orm = {
    selectAll : function (table, cb) {
        var dbQuery = 'SELECT * FROM ' + table + ';';

        connection.query(dbQuery, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        })
    },
    insertOne: function (table, cols, vals, cb) {
        var dbQuery = 'INSERT INTO ' + table + '(' + cols.toString() + ')' + 'VALUES (' + createQmarks(vals.length) + ') ';
        console.log(dbQuery);
        connection.query(dbQuery, vals, function(err, res){
            if(err){
                throw err;
            }
            cb(res);
        });
    },
    updateOne: function(table, objColVals, condition, cb){
        var dbQuery = 'UPDATE ' + table + 'SET '+ translateSQL(objColVals) + 'WHERE ' + condition;
        console.log(dbQuery);
        connection.query(dbQuery, function(err, res){
            if(err){
                throw err;
            }
            cb(res);
        });
    },
    deleteOne: function(table, condition, cb){
        var dbQuery = 'DELETE FROM ' + table + ' WHERE ' + condition;
        console.log(dbQuery);
        connection.query(dbQuery, function(err, res){
            if(err){
                throw err;
            }
            cb(res);
        });
    }
};

//===EXPORTING THE ORM OBJECT FOR THE MODEL BURGER JS FILE===========
module.exports = orm;
