angular.module('starter.controllers', [])

.directive('googleplace', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, model) {
            var options = {
                types: [],
                componentRestrictions: {}
            };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);
 
            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                scope.$apply(function() {
                    model.$setViewValue(element.val());                
                });
            });
        }
    };
})

.controller('ctrlproducts', function($scope) {
})

.controller('ctrlchefs', function($scope) {
 
})

.controller('tabCtrl',function($scope, $state, $window, userService){
    $scope.trending =function(){
    }
    
    $scope.userlogged=true;
    if ((userService.getUsername()) !== 'undefined'){
        $scope.name=userService.getUsername();
        $scope.userlogged=false;
    }
   
})




