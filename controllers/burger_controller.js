let express = require("express");
let burger = require("../models/burger.js");
let router = express.Router();

router.get("/", function (req, res) {
    burger. getAllBurger(function(data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.addNewBurger(["burger", "devoured"], [req.body.burger, req.body.devoured], function(result) {
      
        res.json({ id: result.insertId });
    });
});
router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateBurger({ devoured: req.body.devoured }, condition, function(result) {
        if (result.changedRows === 0) {
       
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;