var matador = require('matador'),
  config = require('./app/config/' + matador.getEnv()),
  app = matador.createApp(__dirname, config, {}),
  port = (process.env.PORT || 3000),
  io = require('socket.io').listen(app);

app.boot();
app.listen(port);

app.set('io', io);

console.log('matador running on port ' + port);