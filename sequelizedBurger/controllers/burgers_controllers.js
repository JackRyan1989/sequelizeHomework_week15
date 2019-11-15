const express = require('express');
const router = express.Router();
const burger = require('../models/burgers');

//Create all routes and logic for those routes below:
//Route for select all:
router.get('/', function (req, res) {
    burger.selectAll(function (data) {
        let hdbsBurg = {
            burger: data
        };
        res.render('index', hdbsBurg);
    });
});

//Route for select 1
router.get('/api/burgs/:id', function (req, res) {
    let burgID = req.params.id;
    burger.selectOne(burgID, function (result) {
        if (result.changedRows === 0) {
            res.status(404).end();
        } else {
            res.json(result);
        }
    });
});

//Route for update 1
router.put('/api/burgs/:id', function (req, res) {
    let burgID = req.params.id;
    burger.updateOne({
        dev: req.body.dev,
    }, burgID, function (result) {
        if (result.changedRows === 0) {
            res.status(404).end();
        } else {
            res.json(result);
        }
    });
});

router.post("/api", function (req, res) {
    burger.addOne(["burgerName", "devoured"],
        [req.body.bName, req.body.dev], function (result) {
            res.json({ id: result.instertId });
        });
});

module.exports = router;