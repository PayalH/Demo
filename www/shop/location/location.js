angular.module('location', ['ui.directives','ui.filters'])
.controller('ctrllocation', function($scope, productService){
    productService.getAll().then(function(data){
        $scope.productdata = data.data; 
    });
     $scope.items = [
    { location: 0 },
    { location: 1 },
    { location: 2 },
    { location: 3 }
   ];
    
})

.controller('ctrlTrendinglocation', function($scope, $window, $http, productService, userService,$ionicScrollDelegate) {
   
    var location=$stateParams.location;
    var Productdata = productService.getAll().then(function(data){  
      
        var products= data.data;
        for (var i = 0; i < products.length; i++) {
            if (products[i].location == location) {
                 console.log(products[i]);
              return products[i];
            }
        }
    }); 
    Productdata.then(function(data){
        $scope.product=data;
    })
    $scope.flip = function() {
        $window.location.href = '#/tab/productDetail';
    }
    
})
.controller('ctrlTrendinglocation', function($scope, productService){
    
})