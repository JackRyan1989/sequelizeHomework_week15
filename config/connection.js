const mysql = require('mysql');


connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "dM*4V7c^pK",
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) {
        console.log(err);
    }
});

module.exports = connection;


