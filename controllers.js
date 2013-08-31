
exports.index = function(req, res) {
	res.render('index.ejs', {
		title: 'Websites and Web Applications'
	});
};
exports.services = function(req, res) {
	res.render('workstuff.ejs', {
		title: 'building products and services for the web',
		meta: {
			description: "Born and raised in Sacramento, building your Node.js stack with love.",
			keywords: "consulting, node.js, javascript, web development, web applications, sacramento, roseville, folsom"
		}
	});
};
exports.contact = function(req, res) {
	res.render('contact.ejs', {
		title: 'get in touch'
	});
};

exports["404"] = function(req, res) {
	res.statusCode = 404;
	res.render('blank.ejs', {
		title: 'Page not found',
		meta: {},
		text: 'Your request didn\'t match a page - it may have been removed.'
	});
};
