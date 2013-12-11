var redis = require('redis-url').connect(process.env.REDISTOGO_URL);
var sendgrid = require('sendgrid')(process.env.SG_USER, process.env.SG_PWD);

module.exports = function (app) {

  app.get('io').sockets.on('connection', function (socket) {
    socket.on('join game', function (id) {
      socket.join(id);
    });
    socket.on('damage', function (mail) {
      redis.sadd('emails', mail.email);

      sendgrid.send({
        to: mail.email,
        from: 'yamil@sendgrid.com',
        subject: 'hack.sendgrid.com',
        html: 'You performed: ' + mail.damage + ' damage.<br>' + mail.killed +
        '<br><br>Hey buddy, thanks for participating on the SendGrid demo!<br>' +
        'Feel free to join using http://hack.sendgrid.com/ ! Its free!<br><br>' +
        'If you need anything, anything at all feel free to reply to this email or' +
        'tweet me at <a href=\'https://twitter.com/elbuo8\'>elbuo8</a><br>' +
        '<img src=\'http://assets3.sendgrid.com/mkt/assets/logos_brands/horizontal/PNG/logo_full_color_flat-2678d60e486518e170487044e00ff0ab.png\'>'
      }, function (e) {
        if (e) {
          console.log(e);
        }
      });
    });
  });
};