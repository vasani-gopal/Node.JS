const User = require('../models/User');
const Article = require('../models/Article');

const getUserArticles = async (req, res) => {
    try {
        const userId = req.user.id;
        const articles = await Article.find({ author: userId }).populate('author', 'username email');
        res.send(articles);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching articles' });
    }
};

const getAllUsersWithArticles = async (req, res) => {
    try {
        const users = await User.find().populate('articles', 'title createdAt');
        res.send(users);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching users' });
    }
};

const updateUserArticles = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId);
        
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        
        const articles = await Article.find({ author: userId });
        user.articles = articles.map(article => article._id);
        await user.save();
        
        res.send({ message: 'User articles updated', user });
    } catch (error) {
        res.status(500).send({ message: 'Error updating user articles' });
    }
};

module.exports = { getUserArticles, getAllUsersWithArticles, updateUserArticles };
