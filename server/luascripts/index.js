const fs = require('fs');
let jobMap = {
    'boot' : '/boot.lua',
    'mine' : '/mine.lua'
}
let jobOps = {}

jobOps.readFile = async (job) => {
    return fs.promises.readFile(__dirname + jobMap[job], 'utf-8', (error, data) => {
        if(error) {
            throw error;
        }
        return data.toString()
    });
}

module.exports = jobOps