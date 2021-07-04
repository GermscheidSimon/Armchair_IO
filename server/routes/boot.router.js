const express = require('express');
const generator = require('../modules/generator');
const jobOps = require('../luascripts/index')
const ramDb = require('../dataAccess/ramDB')
const luamin = require('luamin')
const Turtle = require('../Models/Turtle')
const router = express.Router();


router.get('/', (req, res) =>{
    jobOps.readFile('boot').then((script) =>{
        res.send(luamin.minify(script))
    });
});
router.get('/helpers', (req, res) =>{
    // let newGuid = generator.guid()
    // let newTurtle = new Turtle(label = newGuid, watIsPurpose ='mine')
    jobOps.readFile('helpers').then((script) =>{
        res.send(luamin.minify(script))
    });
});

router.get('/purpose', (req, res) =>{
    console.log(req.body);
    console.log(req);
});



module.exports = router;