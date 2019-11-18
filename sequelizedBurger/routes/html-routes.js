//Require the models:
const conn = require("../models/burgers");

//Export your routes below:
module.exports = function (app) {
    //Get everything on front page:
    app.get('/', function (req, res) {
        res.render('index');
    });
};