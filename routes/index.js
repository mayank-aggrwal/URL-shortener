const express = require('express');
const router = express.Router();

router.get('/health', function(req, res) {
    res.send("API is up and running");
});

module.exports = router;