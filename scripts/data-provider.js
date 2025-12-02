const path = require("path"); 
const fs = require("fs");

// retrieve contents from a JSON file
function getData(filename) {
    const file = filename; 
    const jsonPath = path.join(__dirname, '../data', file); 
    const jsonData = fs.readFileSync(jsonPath, 'utf8');
    const jsonParsed = JSON.parse(jsonData);
    return jsonParsed;
} 

// get data from JSON
const artists = getData('artists.json');
const galleries = getData('galleries.json');
const paintingsNested = getData('paintings-nested.json');

module.exports = {
    artists : artists,
    galleries : galleries,
    paintingsNested : paintingsNested
}