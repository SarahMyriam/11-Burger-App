var express = require('express');

var router = express.Router();

//===WE NEED THE MODEL BURGER.JS FOR ITS DATABASE FUNCTIONS============
var burger = require('../models/burger.js');


//===CREATING ALL OUR ROUTES=================================
router.get('/', function(req, res){
    burger.all(function(data){
    var hbsObject = {
        burgers: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
    });
});

router.post('/api/burgers', function(req, res){
    burger.create([
        'burger', 'devoured'
    ],[
        req,body.name, req.body,devoured
    ], function(result){
        res.json({ id: result.insertId});
    })
});

router.delete('/api/burgers/:id', function(req, res){
    var condition = 'id = ' + req.params.id;

    burger.delete(condition, function(result){
        if(result.affectedRows == 0) {
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    })
})

//===EXPORTING ROUTES FOR SERVER.JS TO USE==========================
module.exports = router;