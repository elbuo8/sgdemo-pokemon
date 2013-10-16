exports.gameview = function (req, res) {
  res.render('game');
};

exports.attack = function (req, res) {
  console.log(req.body);
};