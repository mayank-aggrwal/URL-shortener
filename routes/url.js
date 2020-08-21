const express = require('express');
const router = express.Router();

const validUrl = require('valid-url');
const config = require('config');
const shortid = require('shortid');

const Url = require('../models/Url');

// @route        POST /api/short
// @desc         Create short URL
router.post('/short', async (req, res) => {
    const { longUrl } = req.body;
    const baseUrl = config.get('baseUrl');

    if(!validUrl.isUri(baseUrl)) {
        return res.status(401).json(`Invalid base URL`);
    }

    // Create URL short code
    const urlCode = shortid.generate();

    // Check long URL
    if(validUrl.isUri(longUrl)) {
        try {
            let url = await Url.findOne({ longUrl });

            if(url) {
                res.json(url);
            }
            else {
                const shortUrl = baseUrl + '/' + urlCode;
                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                });
                await url.save();
                res.json(url);
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json(`Server error`);
        }
    }
    else {
        console.log(`Invalid long URL`);
        res.status(401).json('Invalid long URL');
    }
});


// @route        POST /api/custom
// @desc         Create custom short URL
router.post('/custom', async (req, res) => {
    const longUrl = req.body.longUrl;
    const customCode = req.body.code;
    const baseUrl = config.get('baseUrl');

    if(!validUrl.isUri(baseUrl)) {
        return res.status(401).json(`Invalid base URL`);
    }

    // Check long URL
    if(validUrl.isUri(longUrl)) {
        try {
            let url = await Url.findOne({ longUrl });

            if(url) {
                res.json(url);
            }
            else {
                let code = await Url.findOne({ urlCode: customCode });
                if(code) {
                    res.status(401).json(`Code already in use`);
                }
                else {
                    const shortUrl = baseUrl + '/' + customCode;
                    url = new Url({
                        longUrl,
                        shortUrl,
                        urlCode: customCode,
                        date: new Date()
                    });
                    await url.save();
                    res.json(url);
                }
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json(`Server error`);
        }
    }
    else {
        console.log(`Invalid long URL`);
        res.status(401).json('Invalid long URL');
    }
});


module.exports = router;