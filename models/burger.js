// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        })
    },
    insertOne: function (cols, vals, cb) {
        orm.selectAll("burgers", cols, vals, function (res) {
            cb(res);
        })
    },
    updateOne: function (objColVals, condition, cb) {
        orm.selectAll("burgers", objColVals, condition, cb, function (res) {
            cb(res);
        })
    },
    deleteOne: function (objColVals, condition, cb) {
        orm.selectAll("burgers", objColVals, condition, cb, function (res) {
            cb(res);
        })
    }
    
}

// Export the database functions for the controller (burgersController.js).
module.exports = burger;