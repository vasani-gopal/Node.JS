const express = require('express');
const { getUserArticles, getAllUsersWithArticles, updateUserArticles } = require('../controllers/userController');
const { checkToken, checkRole } = require('../middleware/auth');
const router = express.Router();

router.get('/my-articles', checkToken, getUserArticles);
router.get('/all-users', checkToken, checkRole(['admin']), getAllUsersWithArticles);
router.put('/update-articles', checkToken, updateUserArticles);

module.exports = router;
