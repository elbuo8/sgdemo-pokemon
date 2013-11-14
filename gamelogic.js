var sendgrid = require('sendgrid')(process.env.SG_USER, process.env.SG_PWD);

module.exports = function (app) {

  app.get('io').sockets.on('connection', function (socket) {
    socket.on('join game', function (id) {
      socket.join(id);
      //app.get('io').sockets.in(id).emit('attack', 'yamil.asusta@upr.edu');
    });
    socket.on('damage', function (mail) {

      sendgrid.send({
        to: mail.email,
        from: 'yamil.asusta@sendgrid.com',
        subject: 'hack.sendgrid.com',
        text: 'You performed: ' + mail.damage + ' damage.\n' + mail.killed +
        '\nHey buddy, thanks for participating on the SendGrid demo!\n' +
        'Feel free to join using http://hack.sendgrid.com/ ! Its free!'

      }, function (e) {
        if (e) {
          console.log(e);
        }
      });
    });
  });
};