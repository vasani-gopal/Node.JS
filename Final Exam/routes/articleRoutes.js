const express = require('express');
const Article = require('../models/Article');
const { checkToken, checkRole } = require('../middleware/auth');
const jwt = require('jsonwebtoken');
const router = express.Router();

const getUserFromToken = (req) => {
    const token = req.cookies.token;
    if (!token) return null;
    
    try {
        return jwt.verify(token, 'private-key');
    } catch (error) {
        return null;
    }
};

const attachUser = (req, res, next) => {
    req.user = getUserFromToken(req);
    if (!req.user) {
        return res.status(401).send({ message: 'Authentication required' });
    }
    next();
};

router.get('/', async (req, res) => {
    const articles = await Article.find().populate('author', 'username');
    res.send(articles);
});

router.post('/', attachUser, checkRole(['admin', 'user']), async (req, res) => {
    const article = new Article({
        ...req.body,
        author: req.user.id
    });
    await article.save();
    res.redirect('/articles');
});

router.put('/:id', attachUser, checkRole(['admin', 'user']), async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        
        if (!article) {
            return res.status(404).send({ message: 'Article not found' });
        }
        
        if (req.user.role !== 'admin' && article.author.toString() !== req.user.id) {
            return res.status(403).send({ message: 'Access denied' });
        }
        
        const updatedArticle = await Article.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true }
        );
        
        res.redirect('/articles');
    } catch (error) {
        res.status(500).send({ message: 'Update failed', error: error.message });
    }
});

router.delete('/:id', attachUser, checkRole(['admin', 'user']), async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        
        if (!article) {
            return res.status(404).send({ message: 'Article not found' });
        }
        
        if (req.user.role !== 'admin' && article.author.toString() !== req.user.id) {
            return res.status(403).send({ message: 'Access denied' });
        }
        
        await Article.findByIdAndDelete(req.params.id);
        res.redirect('/articles');
    } catch (error) {
        res.status(500).send({ message: 'Delete failed', error: error.message });
    }
});

module.exports = router;
