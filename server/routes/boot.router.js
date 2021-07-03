const express = require('express');
const generator = require('../modules/generator');
const jobMap = require('../luascripts/index')
const ramDb = require('../dataAccess/ramDB')
const fsOps = require('../modules/fsOps/fsOps')
const Turtle = require('../Models/Turtle')
const router = express.Router();


router.get('/', (req, res) =>{
    let newGuid = generator.guid()
    let newTurtle = new Turtle(label = newGuid, watIsPurpose ='mine')
    let jobScript = fsOps.readFile(jobMap[newTurtle.watIsPurpose])
    newTurtle.jobScript = jobScript
    res.send(JSON.stringify(newTurtle))
});

module.exports = router;