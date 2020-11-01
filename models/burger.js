//===IMPORT THE ORM TO CREATE FUNCTIONS THAT WILL INTERACT WITH THE DATABASE========= 
var orm = require('../config/orm.js');

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
  
    insertOne: function(cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
  
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },
  
    deleteOne: function(condition, cb) {
      orm.deleteOne("burgers", condition, function(res) {
        cb(res);
      });
    }
  };

//===EXPORTING THE DATABASE FUNCTIONS FOR THE CONTROLER=============
module.exports = burger;


