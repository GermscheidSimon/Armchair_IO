const fs = require('fs');
let jobMap = {
    'mine' : '/mine.lua'
}
let fsOps = {}

fsOps.readFile = (job, cb) => {
    fs.readFile(__dirname + jobMap[job], (error, data) => {
        if(error) {
            throw error;
        }
        console.log(data.toString());
        cb(data.toString())
    });
}

module.exports = fsOps