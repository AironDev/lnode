const express = require('express')
const router = express.Router();

// Get posts index/posts
router.get('/products', (req, res, next) => {
	res.render('index', {'title': 'Surf Shop - Products'});
});

module.exports = router;