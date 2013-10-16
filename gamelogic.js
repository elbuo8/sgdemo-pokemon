
module.exports = function (app) {

  app.get('io').sockets.on('connection', function (socket) {
    socket.on('join game', function (id) {
      socket.join(id);
      app.get('io').sockets.in(id).emit('attack', 'ya@sendgrid.com');
    });
  });
};