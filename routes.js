
exports.index = function(req, res) {
	res.render('index.ejs', {
		title: ''
	});
};
exports.yaycode = function(req, res) {
	res.render('yaycode.ejs', {
		title: 'coding skills'
	});
};
exports.workstuff = function(req, res) {
	res.render('workstuff.ejs', {
		title: 'services'
	});
};
exports.contact = function(req, res) {
	res.render('contact.ejs', {
		title: 'get in touch'
	});
};
