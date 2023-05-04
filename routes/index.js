var express = require("express");
const MessageModel = require("../models/message");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
    const messages = await MessageModel.find().sort({ added_at: -1 }).exec();
    res.render("index", { title: "Message Board", messages });
});

router.get("/new", function (req, res, next) {
    res.render("form");
});

router.post("/new", async function (req, res, next) {
    await MessageModel.create({
        text: req.body.message,
        user: req.body.user,
        added_at: new Date(),
    });

    res.redirect("/");
});

module.exports = router;
