const express = require('express');
const router = express.Router();
const authcontroller = require('../controller/AuthController');


router.post('/login', authcontroller.login);
router.post('/register', authcontroller.register);




module.exports = router;