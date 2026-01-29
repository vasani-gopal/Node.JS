const express = require('express');
const { addComment, getComments, deleteComment } = require('../controllers/commentController');
const { verifyToken, checkAuth } = require('../middleware/authMiddleware');

const router = express.Router();

// Get comments for an article (public)
router.get('/:articleId', checkAuth, getComments);

// Add comment (requires authentication)
router.post('/:articleId', verifyToken, addComment);

// Delete comment (requires authentication)
router.delete('/:id', verifyToken, deleteComment);

module.exports = router;
