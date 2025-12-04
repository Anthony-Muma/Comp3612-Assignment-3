const jsonMessage = require('./json-message.js');

function handleAllGalleries(galleries, app) {
    app.get('/api/galleries', (req, resp) => {resp.json(galleries)});
}

function handleGalleriesCountry(galleries, app) {
    app.get('/api/galleries/:country', (req, resp) => {
        const country = req.params.country.toLowerCase();
        const matches = galleries.filter(gallery => gallery.GalleryCountry.toLowerCase() === country);
        if (matches.length > 0) {
            resp.json(matches);
        } else {
            resp.json(jsonMessage(`Couldn't find a match with country '${country}'`));
        }
    });
}

module.exports = {
    handleAllGalleries,
    handleGalleriesCountry
}