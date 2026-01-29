const express = require('express');
const {
    getAllArticles,
    getArticleById,
    getArticlesByUser,
    createArticle,
    updateArticle,
    deleteArticle,
    getMyArticles,
} = require('../controllers/articleController');
const { verifyToken, checkAuth } = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.get('/', checkAuth, getAllArticles);
router.get('/:id', checkAuth, getArticleById);
router.get('/user/:userId', checkAuth, getArticlesByUser);

// Protected routes (require authentication)
router.post('/', verifyToken, createArticle);
router.put('/:id', verifyToken, updateArticle);
router.delete('/:id', verifyToken, deleteArticle);
router.get('/my/all', verifyToken, getMyArticles);

module.exports = router;
