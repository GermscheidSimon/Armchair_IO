const Turtle = require('../Models/Turtle')
const docs = require('./documents')

module.exports = ramDB = {
    update: updateTurtle(turtleObj)
}

const updateTurtle = (turtleObj) => {
    for (const turtle of docs) {
        if (turtleObj.label = turtle.label) {
            turtle = new Turtle(
                turtleObj.label,
                turtleObj.whatIsPurpose,
                turtleObj.xPOs,
                turtleObj.yPos,
                turtleObj.xPOs,
                turtleObj.fuelLvl
            )
        }
    }
}

