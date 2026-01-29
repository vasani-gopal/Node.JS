const express = require('express');
const { Login, Register, Logout } = require('../controllers/authController');
const router = express.Router();

router.post('/register', Register);
router.post('/login', Login);
router.get('/logout', Logout);

module.exports = router;
