module.exports.controller = function(app) {
	var RememberTile = require('../Models/RememberTile')

	app.get('/tests/remember-tile', function(req, res) {
		res.render('tests/rememberTiles', {user: req.user});
	});

	app.get('/remember-tile/level/:level', function(req, res) {
		// 4x4 = 16
		var level = [4,5,5,6,7,8,9]
		var last = level.length;
		var tiles = level[req.params.level];
		console.log(tiles, last)
		var arr = Array.from(Array(15).keys());
		arr = arr.map(function(el, index) {
			return el + 1;
		});

		arr.sort(function() { return 0.5 - Math.random() });
		return res.send(arr.slice(0,tiles))
	});

	app.post('/tests/remember-tile/score', function(req, res) {
		RememberTile.log(req.user, req.body, function(err, result) {
			console.log(err)
			res.sendStatus(200)
		})
	});

}