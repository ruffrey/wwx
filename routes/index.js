
/*
 * GET home page.
 */
var c_title = 'tech consultancy';

exports.index = function(req, res) {
	res.render('index', {
		title: c_title
	});
};
exports.blog = function(req, res) {
	res.render('blog/index', {
		title: 'blog moved!'
	});
};
exports.yaycode = function(req, res) {
	res.render('yaycode/index', {
		title: c_title
	});
};
exports.workstuff = function(req, res) {
	res.render('workstuff/index', {
		title: c_title
	});
};
exports.contact = function(req, res) {
	res.render('contact/index', {
		title: c_title
	});
};
