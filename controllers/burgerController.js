var express = require('express');

var router = express.Router();

//===WE NEED THE MODEL BURGER.JS FOR ITS DATABASE FUNCTIONS============
var burger = require('../models/burger.js');


//===CREATING ALL OUR ROUTES=================================
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hdbrsObj = {
        burgers: data
      };
      console.log(hdbrsObj);
      res.render("index", hdbrsObj);
    });
  
    router.post("/api/burgers", function(req, res) {
      burger.insertOne(
        ["burger_name", "devoured"],
        [req.body.burger_name, req.body.devoured],
        function(result) {
          // Send back the ID of new burger
          res.json({ id: result.insertId });
        }
      );
    });
    router.put("/api/burgers/:id", function(req, res) {
      var condition = "id = " + req.params.id;
  
      console.log("condition", condition);
      burger.updateOne({ devoured: req.body.devoured }, condition, function(
        result
      ) {
        if (result.changedRows === 0) {
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      });
    });
    router.delete("/api/burgers/:id", function(req, res) {
      var condition = "id = " + req.params.id;
      console.log("condition", condition);
  
      burger.deleteOne(condition, function(result) {
        if (result.changedRows === 0) {
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      });
    });
  });



//===EXPORTING ROUTES FOR SERVER.JS TO USE==========================
module.exports = router;