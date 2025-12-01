const path = require("path"); 
const fs = require("fs");

// for now, we will get our data by reading the provided json file
function getData(filename) {
    const file = filename; 
    const jsonPath = path.join(__dirname, '../data', file); 
    const jsonData = fs.readFileSync(jsonPath, 'utf8');
    const jsonParsed = JSON.parse(jsonData);
    return jsonParsed;
} 

// convert string data into JSON object 
const artists = getData('artists.json');
const galleries = getData('galleries.json');
const paintingsNested = getData('paintings-nested.json');

module.exports = {
    artists : artists,
    galleries : galleries,
    paintingsNested : paintingsNested
}