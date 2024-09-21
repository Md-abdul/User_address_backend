const express = require('express');
const getAddress  = require('../controllers/addressController');
const router = express.Router();

router.get('/addresses/:userId', getAddress);

module.exports = router;
