const Turtle = require("../Models/Turtle");

// temp in memory db for turtles
const docs = [
    new Turtle(
        "labelName",
        "mine",
        1,
        2,
        3,
        19900
    ),
]

module.exports = docs;