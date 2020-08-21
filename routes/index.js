const express = require('express');
const router = express.Router();

const Url = require('../models/Url');

router.get('/health', function(req, res) {
    res.send("API is up and running");
});

// @route    GET /:code
// @desc     Redirect to long URL
router.get('/:code', async (req, res) => {
    try {
        const url = await Url.findOne({ urlCode: req.params.code });

        if(url) {
            return res.redirect(url.longUrl);
        }
        else {
            return res.status(404).json(`URL not found`);
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json(`Server error`);
    }
});


module.exports = router;