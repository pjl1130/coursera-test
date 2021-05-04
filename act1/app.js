(function () {
'use strict';

angular.module('MsgApp',[])
.controller('MsgController',MsgController);
MsgController.$inject = ['$scope'];

function MsgController($scope) {
  $scope.name = "Molly";
  $scope.states = "chill";

 $scope.sayMsg = function (){
  return "Molly likes dog food";
 }
$scope.PetMolly = function (){
$scope.states = "petted";
}

  
}

})();