angular.module('chefs', [])


.controller('ctrlchefs', function($scope,$window, $http){
    $scope.flipChefsProfile = function() {
        console.log("in");
        $window.location.href = '#/tab/chefsProfile';
    }
    
})

.controller('ctrlchefsProfile', function($scope,$window, productService){    
    productService.getAll().then(function(data){
        $scope.productdata = data.data; 
        console.log($scope.productdata);
    });

    $scope.flip = function() {
        $window.location.href = '#/tab/productDetail';
    }
})