angular.module('trending', ['starter.services'])

.controller('ctrlTrending', function($scope, $window, $http, productService, productIdservice, userService,$ionicScrollDelegate) {
 
    productService.getAll().then(function(data){
        $scope.productdata = data.data; 
        console.log($scope.productdata);
    });
//    
    $scope.search="";
//    $scope.clearSearch = function() {
//        $scope.search = '';
//      };
//    $scope.$on('$ionicView.beforeEnter', function(){ 
//        console.log("in");
//       console.log(productService.getProductid);
//    });
    $scope.flip = function() {
        $window.location.href = '#/tab/productDetail';
    }
    
})

.controller('ctrlProductDetail', function($scope,productIdservice, $stateParams, productService){
   
    //$scope.product = productIdservice.get($stateParams.productId);
    var productId=$stateParams.productId;
    var Productdata = productService.getAll().then(function(data){  
            console.log(data.data);
            
            var products= data.data;
            for (var i = 0; i < products.length; i++) {
                if (products[i].product_id == productId) {
                     console.log(products[i]);
                  return products[i];
                }
            }
        }); 
    Productdata.then(function(data){
        $scope.product=data;
    })
})
