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
    updateOne: function(bName, dev, colId, cb){
        orm.updateOne("burgers", bName, dev, colId, function(res){
            cb(res);
        });
    }
};

module.exports = burger;