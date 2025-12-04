const jsonMessage = require('./json-message.js');

function handleAllPaintings(paintings, app) {
    app.get('/api/paintings', (req, resp) => {resp.json(paintings)});
}

function handlePaintingId(paintings, app) {
    app.get('/api/painting/:id', (req, resp) => {
        const id = parseInt(req.params.id);
        const matches = paintings.filter(painting => painting.paintingID === id);

        if (matches.length > 0) {
            resp.json(matches);
        } else {
            resp.json(jsonMessage(`Couldn't find a match for id '${id}'`));
        }
    });
}

function handlePaintingGalleryId(paintings, app) {
    app.get('/api/painting/gallery/:id', (req, resp) => {
        const id = parseInt(req.params.id);
        const matches = paintings.filter(painting => painting.gallery.galleryID === id);

        if (matches.length > 0) {
            resp.json(matches);
        } else {
            resp.json(jsonMessage(`Couldn't find a match for id '${id}'`));
        }           
    });
}

function handlePaintingArtistId(paintings, app) {
    app.get('/api/painting/artist/:id', (req, resp) => {
        const id = parseInt(req.params.id);
        const matches = paintings.filter(painting => painting.artist.artistID === id);
        
        if (matches.length > 0) {
            resp.json(matches);
        } else {
            resp.json(jsonMessage(`Couldn't find a match for id '${id}'`));
        }
    });
}

function handlePaintingMinMax(paintings, app) {
    app.get('/api/painting/year/:min/:max', (req, resp) => {
        const min = parseInt(req.params.min);
        const max = parseInt(req.params.max);
        const matches = paintings.filter(painting => painting.yearOfWork > min && painting.yearOfWork < max);

        if (matches.length > 0) {
            resp.json(matches);
        } else {
            resp.json(jsonMessage(`Couldn't find a match for years between '${min}' to '${max}'`));
        }
    });
}

function handlePaintingTitleName(paintings, app) {
    app.get('/api/painting/title/:text', (req, resp) => {
        const text = req.params.text.toLowerCase();
        const matches = paintings.filter(painting => painting.title.toLowerCase().includes(text));

        if (matches.length > 0) {
            resp.json(matches);
        } else {
            resp.json(jsonMessage(`Couldn't find a match for titles with '${text}'`));
        }
    });
}

function handlePaintingColorName(paintings, app) {
    app.get('/api/painting/color/:name', (req, resp) => {
        const name = req.params.name.toLowerCase();
        const matches = paintings.filter(painting => {
            const dominateColors = painting.details.annotation.dominantColors;
            return dominateColors.find(color => color.name.toLowerCase() === name);
        });

        if (matches.length > 0) {
            resp.json(matches);
        } else {
            resp.json(jsonMessage(`Couldn't find a match for color '${name}'`));
        }
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