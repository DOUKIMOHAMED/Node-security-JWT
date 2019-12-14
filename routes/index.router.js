const express = require('express');
const router = express.Router();
const jwtHelper = require('../config/jwtHelper');
const ctrlUser = require('../controllers/user.controller');
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);

router.post('/authenticate', ctrlUser.authenticate);
router.post('/register', ctrlUser.register);

module.exports = router;



