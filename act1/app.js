(function () {
'use strict';

angular.module('MsgApp',[])
.controller('MsgController',MsgController);
MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "MOlly";
  $scope.message = "Molly likes dog food";
}

})();