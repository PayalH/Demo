angular.module('tabs', [])
.controller('tabCtrl',function($scope, $state, $window, userService){
    $scope.trending =function(){
    }
//    $scope.userDetail=userService.getUserData();
//    console.log($scope.userDetail);
//    console.log(angular.isDefined($scope.userDetail.user_type));
//    
//    $scope.buyer=false;
//    if(angular.isDefined($scope.userDetail.user_type=="Buyer")){
//        $scope.buyer=true;
//        console.log($scope.buyer);
//    }
        
    $scope.userlogged=true;
    if ((userService.getUsername()) !== 'undefined'){
        $scope.name=userService.getUsername();
        $scope.userlogged=false;
    }     
    $scope.logout = function(){
        userService.setUsername("");
        userService.setUserData("");
        $scope.userlogged=true;
        $window.location.href = '#/appload';
    }   
})

.filter('searchtext', function(){
  return function (items, query) {
    var filtered = [];
    var letterMatch = new RegExp(query, 'i');
    if (angular.isDefined(query)) {
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
        
      if (angular.isDefined(query)) {
        if ((letterMatch.test(item.product_name.substring(0, query.length))) || (letterMatch.test(item.category.substring(0, query.length))) || (letterMatch.test(item.location.substring(0, query.length))) || (letterMatch.test(item.price.substring(0, query.length)))) {
          filtered.push(item);
        }
      } else {
        filtered.push(item);
      }
    }
    }
    return filtered;
  };
});