const express = require('express');
const burger = require('../models/burgers');

const router = express.Router();

//Create all routes and logic for those routes below:
//Route for select all:
router.get('/', function(req, res){
    burger.selectAll(function(data){
        let hdbsBurg = {
            burger: data
        }
        res.render('index', hdbsBurg);
    });
});

//Route for select 1
router.get('/api/burgs/:id', function(req, res){
    let burgID = req.params.id;
    burger.selectOne(burgID, function(result){
        if (result.changedRows === 0) {
            res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//Route for update 1
router.put('/api/burgs/:id', function(req, res){
    let burgID = req.params.id;
    burger.updateOne({
        bName: req.body.burger,
        dev: req.body.dev,
    }, burgID, function(result){
        if (result.changedRows === 0) {
            res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;