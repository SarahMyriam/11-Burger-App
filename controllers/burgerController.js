var express = require('express');

// IMPORTING THE MODEL TO USE ITS DATABASE FUNCTIONS
var burger = require('../models/burger.js');

var router = express.Router();

// CREATING ALL OUR ROUTES ------------
router.get('/', function(req, res){
    burger.all(function(data){
    var hbsObject = {
        burger: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
    });
});

router.post('/api/burgers', function(req, res){
    burger.create(['burger', 'devoured'], [req,body.name, req.body,devoured], function(result){
        res.json({ id: result.insertId});
    }
});

module.exports = router;