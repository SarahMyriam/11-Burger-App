//===IMPORT THE ORM TO CREATE FUNCTIONS THAT WILL INTERACT WITH THE DATABASE========= 
var orm = require('../config/orm.js');

var burger = {
    all: function(cb){
        orm.all('burgers', function(res){
            cb(res);
        })
    },
    create: function(cols, vals, cb){
        orm.create('burgers', cols, vals, function(res){
            cb(res);
        });
    },
    delete: function(condition, cb){
        orm.delete('burgers', condition, function(res){
            cb(res)
        });
    }  
};

//===EXPORTING THE DATABASE FUNCTIONS FOR THE CONTROLER=============
module.exports = burger;


