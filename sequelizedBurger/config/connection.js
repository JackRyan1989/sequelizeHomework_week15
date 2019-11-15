const mysql = require('mysql');


connection = mysql.createConnection({
    host: "lolyz0ok3stvj6f0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "uyc1k2k5tjpjrlnz",
    password: "ohoz8u83uch49fzw",
    database: "p3n3vlsf6afwuf96"
});

connection.connect(function (err) {
    if (err) {
        console.log(err);
    }
});

module.exports = connection;


