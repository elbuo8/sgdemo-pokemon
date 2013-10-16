
var gameController = require('./controllers/game');

module.exports = function (app) {
  app.get('/game/:id', gameController.gameview);
  app.post('/game', gameController.attack);
};