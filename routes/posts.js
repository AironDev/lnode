const express = require('express')
const router = express.Router();

// Get posts index/posts
router.get('/posts', (req, res, next) => {
	res.render('index', {'title': 'Surf Shop - Post'});
});

// Get posts index/posts
router.get('/posts/new', (req, res, next) => {
	res.render('index', {'title': 'Surf Shop - New Post'});
});

// Get posts index/posts
router.get('/posts/new', (req, res, next) => {
	res.render('index', {'title': 'Surf Shop - New Post'});
});

// Get posts index/posts
router.get('/posts/new', (req, res, next) => {
	res.render('index', {'title': 'Surf Shop - New Post'});
});

// Get posts index/posts
router.get('/posts/new', (req, res, next) => {
	res.render('index', {'title': 'Surf Shop - New Post'});
});

// Get posts index/posts
router.get('/posts/new', (req, res, next) => {
	res.render('index', {'title': 'Surf Shop - New Post'});
});

// Get posts index/posts
router.get('/posts/new', (req, res, next) => {
	res.render('index', {'title': 'Surf Shop - New Post'});
}); 

module.exports = router;


/*
GET index 				/posts
GET New					/posts/new
POST Create				/posts
GET Show				/posts/:id
GET Edit				/posts/:id/edit
PUT Update				/posts/:id
DELETE Destroy			/posts/:id
*/