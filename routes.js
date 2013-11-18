
module.exports = function (app) {
  var gameController = require('./controllers/game')(app);
  app.get('/game/:lifepoints', gameController.gameview);
  app.post('/game/', gameController.attack);
};
