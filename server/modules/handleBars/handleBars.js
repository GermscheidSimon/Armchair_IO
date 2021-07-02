const fs = require('fs');
const Handlebars = require('handlebars');

const workingDir = require('path').resolve(__dirname)
const serverURL = process.env.serverURL || 'http://localhost:5000/api/s3upload'


// master template for code snippet generation
const sourceSnippet = fs.readFileSync((`${workingDir}/../assets/template.html`), {encoding:'utf8', flag:'r'}) 

const compileCodeSnippet = (eventKey) => {
    const template = Handlebars.compile(sourceSnippet);

    // locate and append the two strings '{{keyID}}' and '{{serverURL}}' with coresponding key and url variable
    const newCodeSnippet = template({keyID: eventKey, serverURL: serverURL});
    
    return newCodeSnippet;
}

module.exports = compileCodeSnippet