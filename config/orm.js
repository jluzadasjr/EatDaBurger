var connection = require("../config/connection");

function createQmarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function translateSql(ob) {
    var arr = [];
    for (var key in ob) {
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
    selectAll: function (table, callBack) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callBack(result);
        });
    },
    //   Should add a new burger
    insertOne: function (table, cols, vals, callBack) {
        var queryString = "INSERT INTO " + table; 

        queryString += " (";
        queryString += cols.toString(); 
        queryString += ") ";
        queryString += "VALUES (";
        queryString += createQmarks(vals.length) 
        queryString +=  ") ";  

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            } 
            callBack(result);
        });
    },

    //   This will change the burger that was devoured. 
    updateOne: function (table, objColVals, condition, callBack) {
        var queryString = "UPDATE " + table; 
        
        queryString += "SET ";
        queryString += translateSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callBack(result);
        });
    },
    deleteOne: function burger_name (table, condition, callBack) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE "
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callBack(result);
        });
    }
}
module.exports = orm;