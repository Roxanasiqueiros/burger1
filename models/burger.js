let orm = require("../config/orm.js");

let burger = {
   
    getAllBurger: function(cb) {
        orm.getAllBurger("burgers", function(res) {
            cb(res);
        });
    },
   
    addNewBurger: function(cols, vals, cb) {
        orm.addNewBurger("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
   
    updateBurger: function(objColVals, condition, cb) {
        orm.updateBurger("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
};


module.exports = burger;