const connection = require("../config/connection.js");

const orm = {
    selectAll: () => {
        let queryString = ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            // what to do
        });
    },
    insertOne: () => {
        let queryString = ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            // what to do
        });
    },
    updateOne: () => {
        let queryString = ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            // what to do
        });
    }
};

module.exports = orm;


