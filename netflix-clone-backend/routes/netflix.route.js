const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const netflix_controller = require('../controllers/netflix.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/:id', netflix_controller.getProfileInfo);
router.post('/create', netflix_controller.profile_create);

module.exports = router;
