const Turtle = require('../Models/Turtle')
const docs = require('./documents')

module.exports = ramDB = {}

ramDB.update = (turtleObj) => {
    let isSuccess = false;
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
            isSuccess = true;
        }
    }
    return isSuccess;
}
ramDB.create  = (turtleObj) => {
    
    const turtle = new Turtle(
        turtleObj.label,
        turtleObj.whatIsPurpose,
        turtleObj.xPOs,
        turtleObj.yPos,
        turtleObj.xPOs,
        turtleObj.fuelLvl
    )
    const count = docs.length;
    docs.push(turtle)
    const newCount = docs.length
    if (newCount > count) {
        return true;
    } else {
        return false;
    }
}

ramDB.get = (arrayOfTutleLabels) => {
    arrayOfTurtles = [];

    for (const label of arrayOfTutleLabels) {
        for (const turtle of docs) {
            if(turtle.label = label){
                arrayOfTurtles.push(turtle);
            }
        }
    }
    return arrayOfTurtles;
}
