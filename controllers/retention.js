var redis = require('redis-url').connect(process.env.REDISTOGO_URL);
var sendgrid = require('sendgrid')(process.env.SG_USER, process.env.SG_PWD);

module.exports = function (app) {
  return {
    compose: function (req, res) {
      res.render('composer');
    },
    followup: function (req, res) {
      console.log(req.body);
      emails = redis.smembers('emails', function (e, emails) {
        console.log(emails);
        redis.del('emails');
        if (emails.length > 0) {
          sendgrid.send({
            to: emails,
            from: 'yamil@sendgrid.com',
            subject: 'Hey again!',
            html: req.body.message
          }, function (e, json) {
            console.log(arguments);
            if (e) {
              res.send(500);
            } else {
              res.send(200);
            }
          });
        } else {
          res.send(200)
        }
      });
    }
  }
}