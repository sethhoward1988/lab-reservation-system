var restful     = require('sequelize-restful'), 
    users = require('../app/controllers/users'),
    controllers = require('../app/controllers/index'),
    db = require('./sequelize');

exports.init = function(app, passport) {
  console.log('Initializing Routes...');

  app.get('/', controllers.index);
  app.get('/login', users.login);
  app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));

  // REST API
  app.all('/api/*', function(req, res, next) {
    if (!req.isAuthenticated()) {
      return res.send(401, 'User is not authorized');
    }
    next();
  });
  
  app.use(restful(db.sequelize, { endpoint: '/api' }));
};
