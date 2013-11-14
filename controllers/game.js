module.exports = function (app) {
  return {
    gameview: function (req, res) {
      res.render('game');
    },
    attack: function (req, res) {
      console.log(req.body);
      app.get('io').sockets.in(req.body.subject).emit('attack', JSON.parse(req.body.envelope).from);
      res.send(200);
    }
  };
};