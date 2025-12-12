const express = require('express');
const router = express.Router();
const auth = require('../Controller/authController')

router.get('/register', auth.registerPage);
router.post('/register', auth.registerUser);

router.get('/login', auth.loginPage);
router.post('/login', auth.loginUser);

router.post('/logout', auth.logoutUser);

module.exports = router;    