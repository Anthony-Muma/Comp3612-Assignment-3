const jsonMessage = require('./json-message.js');

function handleAllArtists(artists, app) {
    app.get('/api/artists', (req, resp) => {resp.json(artists)});
}

function handleArtistsCountry(artists, app) {
    app.get('/api/artists/:country', (req, resp) => {
        const country = req.params.country.toLowerCase();
        const matches = artists.filter(artist => artist.Nationality.toLowerCase() === country);
        if (matches.length > 0) {
            resp.json(matches);
        } else {
            resp.json(jsonMessage(`Couldn't find a match with country '${country}'`));
        }
    });
}

module.exports = {
    handleAllArtists,
    handleArtistsCountry
}