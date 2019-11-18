//Require the models:
const conn = require("../models/burgers");

//Export your routes below:
module.export = function (app) {

    //Get everything on front page:
    app.get("/", function (req, res) {
        conn.burgers.findAll({}).then(function (result) {
            console.log(result);
            res.json(result);
            let hdbsBurg = {
                burger: result
            };
            res.render('index', hdbsBurg);
        });
    })

    //Post new burger:

    //Delete burger:


};

