angular.module('lrs').controller('IndexController', ['$scope', 'Global', function ($scope, Global) {
  $scope.global = Global;
}]);