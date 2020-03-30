var express = require('express');
var router = express.Router();

const posts = [
	{
		title: 'Grass-roots contextually-based workforce',
		content: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.' +
			' Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, ' +
			'lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat.' +
			' Vestibulum sed magna at nunc commodo placerat.'
	}, {
		title: 'Managed multi-state monitoring',
		content: 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue' +
			' eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper' +
			' sapien a libero. Nam dui.'
	}, {
		title: 'Integrated zero administration function',
		content: 'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed ' +
			'interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.' +
			' Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse ' +
			'platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum' +
			' justo, nec condimentum neque sapien placerat ante. Nulla justo.'
	}, {
		title: 'Profound cohesive Graphic Interface',
		content: 'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed ' +
			'interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.' +
			' Donec dapibus. Duis at velit eu est congue elementum.'
	}
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200)
		.json({
			message: "Successful GET request",
			posts: posts
		});
});

module.exports = router;
