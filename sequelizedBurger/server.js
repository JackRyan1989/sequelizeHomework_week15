const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

//Set up port to listen on:
const port = process.env.PORT || 8080;

//Require our model(s):
const conn = require("./models");

//Data parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Our static directory: 
app.use(express.static("public"));

//Handlebars directory specification and engine setting:
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Set up our routes:
require("./routes/api-routes.js")(app);

//Syncing our sequelize models and then starting our express server:
conn.sequelize.sync({}).then(function () {
    app.listen(port, function () {
        console.log("Server listening on: " + port);
    });
});



