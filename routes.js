
module.exports = function (app) {
  var gameController = require('./controllers/game')(app);
  var retentionController = require('./controllers/retention')(app);
  app.get('/', function(req,res) {
    res.redirect('/game/20');
  });
  app.get('/game/:lifepoints', gameController.gameview);
  app.post('/game/', gameController.attack);
  app.get('/emails', retentionController.compose);
  app.post('/followup', retentionController.followup);
  app.post('/webhook', function (req, res) {
    console.log(req.body);
    res.send(200);
  });
};
