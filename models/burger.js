// IMPORT THE ORM TO CREATE FUNCTIONS THAT WILL INTERACT WITH THE DATABASE. 
var orm = require('../config/orm.js');

var burger = {
    all: function(cb){
        orm.all('burger', function(res){
            cb(res);
        })
    },
    create: function(cols, vals, cb){
        orm.create('burger', cols, vals, function(res){
            cb(res);
        });
    }  
};

//exporting the database functions for the controller
module.exports = burger;


