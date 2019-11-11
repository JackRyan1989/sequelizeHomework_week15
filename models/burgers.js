const orm = require('../config/orm');

const burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    selectOne: function(colId, cb){
        orm.selectOne("burgers", colId, function(res){
            cb(res);
        });
    },
    updateOne: function(dev, colId, cb){
        orm.updateOne("burgers", dev, colId, function(res){
            cb(res);
        });
    },
    addOne: function(colName, rowVals, cb) {
        orm.addOne("burgers", colName, rowVals, function(res){
            cb(res);
        });
    }
};

module.exports = burger;