const express = require('express');
const AddressAddedUser = require('../controllers/addressController');
const router = express.Router();

router.post('/register', AddressAddedUser);

module.exports = router;
