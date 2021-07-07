const fs = require('fs');
const Handlebars = require('handlebars');

const workingDir = require('path').resolve(__dirname)
const serverURL = process.env.serverURL || 'http://localhost:5000/api/s3upload'

const defaultTurtle = require('../../dataAccess/defaultTurtleMeta')

// master template for code snippet generation
const sourceSnippet = fs.readFileSync((`${workingDir}/../assets/template.lua`), {encoding:'utf8', flag:'r'}) 

const compileCodeSnippet = (defaultTurtleMeta) => {
    const template = Handlebars.compile(sourceSnippet);

   //locate dah tings 
    const newCodeSnippet = template(defaultTurtleMeta.keys);
    
    return newCodeSnippet;
}

module.exports = compileCodeSnippet