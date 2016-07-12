angular.module('home', [])

.controller('ctrlhome', function($scope, userService) {
    $scope.submitProductDes= function(){ 
        $scope.addDescription = false;
    };
  
    $scope.gotrending==function(){
        console.log("where");
        $window.location.href = '#/tab/trending';
    }
    
})