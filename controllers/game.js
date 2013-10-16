module.exports = function (app) {
  return {
    gameview: function (req, res) {
      res.render('game');
    },
    attack: function (req, res) {
      console.log(req.body);
    }
  };
};