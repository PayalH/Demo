angular.module('registration', [])


.controller('registratonCtrl', function($scope,$window, $http){
    $scope.closeRegistraton=function(){
        $window.location.href = '#/login';
    }
    $scope.register={};
    
    $scope.registerUser=function(){

    }
})