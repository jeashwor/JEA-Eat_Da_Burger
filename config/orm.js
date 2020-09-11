const connection = require("../config/connection.js");

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
    insertOne: (text, cb) => {
        let queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (" + text + ", false);";
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: (condition, cb) => {
        let queryString = "UPDATE burgers SET WHERE " + condition + ";";
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;


