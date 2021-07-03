const express = require('express');
const generator = require('../modules/generator');
const jobOps = require('../luascripts/index')
const ramDb = require('../dataAccess/ramDB')
const Turtle = require('../Models/Turtle')
const router = express.Router();


router.get('/', (req, res) =>{
    let newGuid = generator.guid()
    let newTurtle = new Turtle(label = newGuid, watIsPurpose ='mine')
    jobOps.readFile(newTurtle.watIsPurpose, (script) => {
        console.log(script)
        newTurtle.jobScript = script
    })
    res.send(JSON.stringify(newTurtle))
});

module.exports = router;