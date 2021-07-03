const fs = require('fs');

let fsOps = {}

fsOps.readFile = (scriptLocation) => {
    fs.readFile(scriptLocation, (error, data) => {
        if(error) {
            throw error;
        }
        console.log(data.toString());
        return data.toString()
    });
}

module.exports = fsOps