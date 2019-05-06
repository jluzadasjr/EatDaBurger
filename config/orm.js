var connection = require("./connection.js");

function createQmarks(num) {
    var arr = [];
    for (var i = a; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function translateSql(obj) {
    var arr = []; 
    for (var key in ob)  {
        var value = ob[key]; 
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value)
        }
    }
    return arr.toString();
}

var orm = {

    // Should show all burgers
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM" + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    //   Should add a new burger
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " +
            table + " ("
            + cols.toString +
            ") " +
            "VALUES (" +
            createQmarks(vals.length) +
            ") ";
        console.log(dbQuery);

        connection.query(queryString, [addBurger], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    //   This will change the burger that was devoured. 
    updateOne: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " +
            table + "SET " +
            translateSql(objColVals) +
            " WHERE " +
            condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    deleteOne: function (table, condition, cb) {
        var queryString = "DELETE FROM " +
            table +
            " WHERE " +
            condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}
module.exports = orm;