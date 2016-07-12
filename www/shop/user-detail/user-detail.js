angular.module('user', [])

.controller('ctrlUser', function($scope, userService) {
    $scope.userData=[];
   $scope.userData=userService.getUserData();
})