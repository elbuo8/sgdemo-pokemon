var util = require('util');

module.exports = function (app, config) {
  var ApplicationController = app.getController('Application', true);

  /** @constructor */
  function GameController() {
    ApplicationController.call(this);
  }

  util.inherits(GameController, ApplicationController);

  GameController.prototype.index = function (req, res) {
    console.log(app.get('io'));
  };

  return GameController;
};
