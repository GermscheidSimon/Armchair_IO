const fs = require('fs');
let jobMap = {
    'mine' : '/mine.lua'
}
let jobOps = {}

jobOps.readFile = (job, cb) => {
    fs.readFile(__dirname + jobMap[job], 'utf-8', (error, data) => {
        if(error) {
            throw error;
        }
        cb(data.toString())
    });
}

module.exports = jobOps