module.exports = function (app) {
  return {
    '/game/:id': {
      'get': 'Game.index'
    }
  };
};
