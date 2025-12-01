const express = require('express');

// create an express app 
const app = express();
const provider = require('./scripts/data-provider.js');
const { artists, galleries, paintingsNested } = provider;

// set up route handling 
const artistRouter = require('./scripts/artists-router.js'); 
artistRouter.handleAllArtists(artists, app); 
artistRouter.handleArtistsCountry(artists, app); 

const galleriesRouter = require('./scripts/galleries-router'); 
galleriesRouter.handleAllGalleries(galleries, app); 
galleriesRouter.handleGalleriesCountry(galleries, app); 

const paintingsRouter = require('./scripts/paintings-router'); 
paintingsRouter.handleAllPaintings(paintingsNested, app); 
paintingsRouter.handlePaintingId(paintingsNested, app); 
paintingsRouter.handlePaintingGalleryId(paintingsNested, app); 
paintingsRouter.handlePaintingArtistId(paintingsNested, app); 
paintingsRouter.handlePaintingMinMax(paintingsNested, app); 
paintingsRouter.handlePaintingTitleName(paintingsNested, app); 
paintingsRouter.handlePaintingColorName(paintingsNested, app); 

// Use express to listen to port 
let port = process.env.PORT; 
app.listen(port, () => { 
    console.log("Server running at port = " + port); 
});