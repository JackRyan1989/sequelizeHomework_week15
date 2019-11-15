const connection = require('./connection');

//Object for all orm functions:
const orm = {
    selectAll: function (table, cb) {
        let queryStr = "SELECT * FROM " + table + ';';
        connection.query(queryStr, function (err, result) {
            if (err) {
                throw (err);
            }
            cb(result);
        });
    },
    selectOne: function (table, colId, cb) {
        let queryStr = "SELECT * FROM " + table + " WHERE id = " + colId;
        connection.query(queryStr, function (err, result) {
            if (err) {
                throw (err);
            }
            cb(result);
        });
    },
    updateOne: function (table, dev, colId, cb) {
        let queryStr = "UPDATE " + table + " SET devoured = " + dev.dev + " WHERE id = " + colId;
        connection.query(queryStr, function(err, result){
            if (err) {
                throw (err);
            }
            cb(result);
        });
    },
    addOne: function(table, colName, rowVals, cb) {
        console.log(colName.toString());
        let queryStr = "INSERT INTO " + table + " (" + colName.toString() + ") VALUES (?, ?) ";
        connection.query(queryStr, rowVals, function(err, result){
            if (err) throw err;
            cb(result);
        }); 
    }
};

module.exports = orm;
