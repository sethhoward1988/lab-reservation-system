var restful     = require('sequelize-restful'),
    controllers = require('../app/controllers/index'),
    db          = require('./sequelize');

exports.init = function(app, passport) {
  console.log('Initializing Routes...');

  app.get('/', controllers.index);
  app.post('/login', passport.authenticate('ldapauth', { successRedirect: '/', failureRedirect: '/login' }));

  // REST API
  //if ('production' === app.get('env')) {
    app.all('/api/*', function(req, res, next) {
      if (!req.isAuthenticated()) {
        return res.send(401);
      }
      next();
    });
  //}
  
  app.use(restful(db.sequelize, { endpoint: '/api' }));
};
