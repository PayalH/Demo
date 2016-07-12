angular.module('loginpage', [])


.controller('loginCtrl', function($scope,$window,$state, $http, userService){
    $scope.closeLogin = function() {
        $window.location.href = '#/tab/home';
        $scope.loginData.email='';
        $scope.loginData.password='';
        $scope.error= '';
        $window.location.href = '#/tab/home';
    }
    $scope.loginData={};
    
    $scope.doLogin=function(){
       
    }
    $scope.registration=function(){
        $window.location.href = '#/registration';
        $scope.error= '';
    }
})
