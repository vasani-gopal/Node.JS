const express = require('express');
const Comment = require('../models/Comment');
const { checkToken, checkRole } = require('../middleware/auth');
const router = express.Router();

router.get('/', async (req, res) => {
    const comments = await Comment.find().populate('author', 'username').populate('article', 'title');
    res.send(comments);
});

router.post('/', checkToken, checkRole(['admin', 'user']), async (req, res) => {
    const comment = new Comment({
        ...req.body,
        author: req.user.id
    });
    await comment.save();
    res.send(comment);
});

router.put('/:id', checkToken, checkRole(['admin', 'user']), async (req, res) => {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(comment);
});

router.delete('/:id', checkToken, checkRole(['admin']), async (req, res) => {
    await Comment.findByIdAndDelete(req.params.id);
    res.send({ message: 'Comment deleted' });
});

module.exports = router;
