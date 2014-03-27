module.exports = function (app) {
  return {
    gameview: function (req, res) {
      res.render('game', {lifepoints: req.param('lifepoints')});
    },
    attack: function (req, res) {
      console.log(req.body);
      app.get('io').sockets.in(req.body.subject.match(/\d+/g)[0]).emit('attack', JSON.parse(req.body.envelope).from);
      res.send(200);
    }
  };
};
