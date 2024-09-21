const express = require('express');
const AddressAddedUser = require('../controllers/addressController');
const router = express.Router();

// Route for registering a user and address
router.post('/register', AddressAddedUser);

module.exports = router;
