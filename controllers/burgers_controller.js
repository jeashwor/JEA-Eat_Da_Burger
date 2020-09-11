const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.all((data) => {
        let burgersObj = {
            burgers: data
        };
        res.render("index", burgersObj);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.create(["burger_name", "devoured"], [req.body, false], (res) => {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;

    burger.delete(condition, (result) => {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;

    burger.delete(condition, (result) => {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;