const fs = require('fs');
let jobMap = {
    'mine' : '/mine.lua'
}
let fsOps = {}

fsOps.readFile = (job) => {
    fs.readFileSync(__dirname + jobMap[job], (error, data) => {
        if(error) {
            throw error;
        }
        console.log(data.toString());
        return data.toString()
    });
}

module.exports = fsOps