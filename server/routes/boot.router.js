const express = require('express');
const generator = require('../modules/generator');
const router = express.Router();


router.get('/', (req, res) =>{
    let newBot = {
        guid = generator.guid(),
        task = 'mining'
    }
    res.send(JSON.stringify(newBot))
});