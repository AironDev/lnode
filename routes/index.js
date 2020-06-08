const express = require('express')
const router = express.Router();

// Get posts index/posts
router.get('/', (req, res, next) => {
	res.render('index', {'title': 'Surf Shop -Home'});
});

module.exports = router;