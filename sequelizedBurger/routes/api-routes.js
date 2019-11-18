//Require the models:
const db = require("../models");

//Export your routes below:
module.exports = function (app) {
    //Display all burgers:
    app.get('/', function(req, res) {
        db.Burgers.findAll({}).then(function(data){
            let hdbsBurgs = {
                burger: data
            };
            res.render('index', hdbsBurgs);
        });  
    });
    //Post new burger:
    app.post('/api/burgs', function(req, res){
        db.Burgers.create({
            burgerName: req.body.bName,
            eaten: req.body.dev
        }).then(function(data){
            res.json(data);
        });
    });
    //Updates burger:
    app.put('/api/burgs/:id', function(req, res){
        db.Burgers.update({
            eaten: req.body.eaten
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(data){
            res.json(data);
        });
    });
};

