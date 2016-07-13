angular.module('starter.services', [])

.service('userService', function() {
  var userService = this;
  userService.sharedObject = {};
  userService.userData = {};
    
  userService.getUsername = function(){
     return userService.sharedObject.Username;
  }

  userService.setUsername = function(value){
     userService.sharedObject.Username = value;
  } 
  
  userService.getUserData = function(){
     return userService.userData.Username;
  }

  userService.setUserData = function(value){
     userService.userData.Username = value;
  }  
})

.service('searchFilter', function(){
    
})

.service('productService', function($http) {
 })  
        
.service('productIdservice', function(productService, $q) {
     
   return{
       get: function(productId) {
       return Productdata = productService.getAll().then(function(data){  
            console.log(data.data);
            
            var products= data.data;
            for (var i = 0; i < products.length; i++) {
                if (products[i].product_id == productId) {
                     console.log(products[i]);
                  return products[i];
                }
            }
        }); 
    }
  };
});
