angular.module('appload', [])


.controller('ctrlappload',['$scope', '$ionicModal', '$ionicSlideBoxDelegate','$window', function ($scope, $ionicModal, $ionicSlideBoxDelegate, $window) {
    
    $scope.aImages = [{
      	'src' : 'img/background.jpg', 
      	'msg' : ''
    	}, {
        'src' : 'http://ionicframework.com/img/ionic_logo.svg', 
        'msg' : ''
      }, { 
        'src' : 'img/loginBack.jpg', 
        'msg' : ''
    }];
  
    $ionicModal.fromTemplateUrl('image-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
    });

    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hide', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });
    $scope.$on('modal.shown', function() {
      console.log('Modal is shown!');
    });

    // Call this functions if you need to manually control the slides
    $scope.next = function() {
      $ionicSlideBoxDelegate.next();
    };
  
    $scope.previous = function() {
      $ionicSlideBoxDelegate.previous();
    };
  
  	$scope.goToSlide = function(index) {
      $scope.modal.show();
      $ionicSlideBoxDelegate.slide(index);
    }
  
    // Called each time the slide changes
    $scope.slideChanged = function(index) {
      $scope.slideIndex = index;
    };
    
    $scope.login=function(){
        
        $window.location.href = '#/login';
    }
    $scope.registration=function(){
         
        $window.location.href = '#/registration';
    }
}])