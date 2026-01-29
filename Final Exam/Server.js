const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('./config/database');
const authRoutes = require('./routes/authRoutes');
const articleRoutes = require('./routes/articleRoutes');
const commentRoutes = require('./routes/commentRoutes');
const userRoutes = require('./routes/userRoutes');
const methodOverride = require('method-override');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

app.use('/api/auth', authRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/users', userRoutes);

const getUserFromToken = (req) => {
    const token = req.cookies.token;
    if (!token) return null;
    
    try {
        return jwt.verify(token, 'private-key');
    } catch (error) {
        return null;
    }
};

app.get('/', (req, res) => {
    const user = getUserFromToken(req);
    res.render('index', { title: 'Node.js Final Exam Project', user: user });
});

app.get('/about', (req, res) => {
    const user = getUserFromToken(req);
    res.render('about', { title: 'About', user: user });
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/articles', async (req, res) => {
    const Article = require('./models/Article');
    const articles = await Article.find().populate('author', 'username');
    const user = getUserFromToken(req);
    res.render('articleList', { articles: articles, user: user });
});

app.get('/my-articles', async (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.redirect('/login');
    }
    
    try {
        const decoded = jwt.verify(token, 'private-key');
        const Article = require('./models/Article');
        const articles = await Article.find({ author: decoded.id }).populate('author', 'username');
        res.render('myArticles', { articles: articles, user: decoded });
    } catch (error) {
        res.redirect('/login');
    }
});

app.get('/articles/new', (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.redirect('/login');
    }
    
    try {
        const decoded = jwt.verify(token, 'private-key');
        res.render('articleForm', { user: decoded });
    } catch (error) {
        res.redirect('/login');
    }
});

app.get('/articles/edit/:id', async (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.redirect('/login');
    }
    
    try {
        const decoded = jwt.verify(token, 'private-key');
        const Article = require('./models/Article');
        const article = await Article.findById(req.params.id).populate('author', 'username');
        
        if (!article) {
            return res.status(404).send('Article not found');
        }
        
        if (decoded.id !== article.author._id.toString() && decoded.role !== 'admin') {
            return res.status(403).send('Access denied');
        }
        
        res.render('editArticle', { article: article, user: decoded });
    } catch (error) {
        res.redirect('/login');
    }
});

app.post('/api/articles/:id', async (req, res) => {
    console.log('Request body:', req.body);
    console.log('Request method:', req.method);
    console.log('Request URL:', req.url);
    
    const token = req.cookies.token;
    if (!token) {
        return res.redirect('/login');
    }
    
    try {
        const decoded = jwt.verify(token, 'private-key');
        const Article = require('./models/Article');
        const article = await Article.findById(req.params.id);
        
        if (!article) {
            return res.status(404).send('Article not found');
        }
        
        if (decoded.id !== article.author.toString() && decoded.role !== 'admin') {
            return res.status(403).send('Access denied');
        }
        
        // Check if this is a PUT or DELETE request using method-override
        if (req.body._method === 'PUT') {
            console.log('Updating article with data:', req.body);
            await Article.findByIdAndUpdate(req.params.id, req.body);
            res.redirect('/my-articles');
        } else if (req.body._method === 'DELETE') {
            console.log('Deleting article:', req.params.id);
            await Article.findByIdAndDelete(req.params.id);
            res.redirect('/my-articles');
        } else {
            console.log('Invalid method. _method value:', req.body._method);
            res.status(400).send('Invalid method');
        }
    } catch (error) {
        console.log('Error:', error);
        res.redirect('/login');
    }
});

app.listen(8000, () => {
    console.log("server listen");
});

module.exports = app;