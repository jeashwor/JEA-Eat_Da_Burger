const connection = require("../config/connection.js");

// Helper function for SQL syntax.
const printQuestionMarks = (num) => {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
const objToSql = (ob) => {
    let arr = [];
    for (let key in ob) {
        let value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

const orm = {
    selectAll: (tableInput, cb) => {
        let queryString = "SELECT * FROM ??;";
        connection.query(queryString, [tableInput], (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: (tableInput, cols, vals, cb) => {
        let queryString = "INSERT INTO " + tableInput;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: (tableInput, objColVals, condition, cb) => {
        let queryString = "UPDATE " + tableInput;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    deleteOne: (tableInput, condition, cb) => {
        let queryString = "DELETE FROM " + tableInput;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;


