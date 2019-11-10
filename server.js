const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

const routes = (require("./controllers/burgers_controllers"));

app.use(routes);

app.listen(port, function(){
    console.log("Server listening on: " + port);
});



