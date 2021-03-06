angular.module('lrs.services').factory('globalService', function() {
  var _this = this;
  _this._data = {
    user: window.user,
    authenticated: !!window.user,
    isAdmin: (window.user && window.user.role === 'admin')
  };

  return _this._data;
});
