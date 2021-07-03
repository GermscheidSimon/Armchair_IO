const express = require('express');
const generator = require('../modules/generator');
const jobOps = require('../luascripts/index')
const ramDb = require('../dataAccess/ramDB')
const Turtle = require('../Models/Turtle')
const router = express.Router();


router.get('/', (req, res) =>{
    let newGuid = generator.guid()
    let newTurtle = new Turtle(label = newGuid, watIsPurpose ='mine')
    let jobScript = jobOps.readFile(newTurtle.watIsPurpose)
    console.log(jobScript)
    newTurtle.jobScript = jobScript
    res.send(JSON.stringify(newTurtle))
});

module.exports = router;