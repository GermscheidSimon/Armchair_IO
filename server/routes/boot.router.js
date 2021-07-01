const express = require('express');
const generator = require('../modules/generator');
const router = express.Router();


router.get('/', (req, res) =>{
    let newGuid = generator.guid()
    let newBot = {
        guid: newGuid,
        task: 'mining'
    }
    res.send(JSON.stringify(newBot))
});