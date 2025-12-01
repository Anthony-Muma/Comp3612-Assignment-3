const jsonMessage = require('./json-message.js');

function handleAllPaintings(paintings, app) {
    app.get('/api/paintings', (req, resp) => {resp.json(paintings)});
}

function handlePaintingId(paintings, app) {
    app.get('/api/painting/:id', (req, resp) => {
        const id = parseInt(req.params.id);
        const match = paintings.find(painting => painting.paintingID === id);
        const responseJson = match ? match : jsonMessage(`Couldn't find a match for ${id}`);
        resp.json(responseJson);
    });
}

function handlePaintingGalleryId(paintings, app) {
    app.get('/api/painting/gallery/:id', (req, resp) => {
        const id = parseInt(req.params.id);
        const matches = paintings.filter(painting => painting.gallery.galleryID === id);
        const responseJson = matches.length > 0 ? matches : jsonMessage(`Couldn't find a match for ${id}`)
        resp.json(responseJson);
    });
}

function handlePaintingArtistId(paintings, app) {
    app.get('/api/painting/artist/:id', (req, resp) => {
        const id = parseInt(req.params.id);
        const matches = paintings.filter(painting => painting.artist.artistID === id);
        const responseJson = matches.length > 0 ? matches : jsonMessage(`Couldn't find a match for ${id}`)
        resp.json(responseJson);
    });
}

function handlePaintingMinMax(paintings, app) {
    app.get('/api/painting/year/:min/:max', (req, resp) => {
        const min = parseInt(req.params.min);
        const max = parseInt(req.params.max);
        const matches = paintings.filter(painting => painting.yearOfWork > min && painting.yearOfWork < max);
        const responseJson = matches.length > 0 ? matches : jsonMessage(`Couldn't find a match for ${min} to ${max}`)
        resp.json(responseJson);
    });
}

function handlePaintingTitleName(paintings, app) {
    app.get('/api/painting/title/:text', (req, resp) => {
        const text = req.params.text.toLowerCase();
        const matches = paintings.filter(painting => painting.title.toLowerCase().includes(text));
        const responseJson = matches.length > 0 ? matches : jsonMessage(`Couldn't find a match for ${text}`)
        resp.json(responseJson);
    });
}

function handlePaintingColorName(paintings, app) {
    app.get('/api/painting/color/:name', (req, resp) => {
        const name = req.params.name.toLowerCase();
        const matches = paintings.filter(painting => {
            const dominateColors = painting.details.annotation.dominantColors;
            return dominateColors.find(color => color.name.toLowerCase() === name);
        });
        const responseJson = matches.length > 0 ? matches : jsonMessage(`Couldn't find a match for ${name}`)
        resp.json(responseJson);
    });
}

module.exports = {
    handleAllPaintings,
    handlePaintingId,
    handlePaintingGalleryId,
    handlePaintingArtistId,
    handlePaintingMinMax,
    handlePaintingTitleName,
    handlePaintingColorName
}