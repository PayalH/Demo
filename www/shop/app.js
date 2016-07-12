// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova', 'appload','registration','loginpage',
                          'sell', 'trending','home', 'chefs', 'products','tabs','location', 'user'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {   

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    cache: false,
    url: '/tab',
    abstract: true,
    templateUrl: 'shop/tabs/tabs.html',
    controller: 'tabCtrl'
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',      
    views: {
      'home': {
        templateUrl: 'shop/home/home.html',
        controller: 'ctrlhome'
      }
    }
  })
  
  .state('tab.user', {
    url: '/user',      
    views: {
      'user': {
        templateUrl: 'shop/user-detail/user-detail.html',
        controller: 'ctrlUser'
      }
    }
  })
  
  .state('login', {
    url: '/login',
    templateUrl: 'shop/login/login.html',
    controller:'loginCtrl'    
    
  })
  
  .state('appload', {
    url: '/appload',
    templateUrl: 'shop/app-load/app-load.html',
      controller:'ctrlappload'
    
  })
  .state('tab.trending',{
      url: '/trending',      
      views:{
          'home':{
              templateUrl: 'shop/trending/trending.html',
              controller: 'ctrlTrending'
          }
      }
  })
  .state('tab.productDetail',{
      url: '/productDetail/:productId',      
      views:{
          'home':{
              templateUrl: 'shop/trending/product-detail.html',
              controller: 'ctrlProductDetail'
          }
      }
  })
  
  .state('tab.locationTrending',{
      url: '/locationTrending/:location',      
      views:{
          'home':{
              templateUrl: 'shop/trending/trending.html',
              controller: 'ctrlTrendinglocation'
          }
      }
  })
  
  .state('tab.location',{
      url: '/location',      
      views:{
          'home':{
              templateUrl: 'shop/location/location.html',
              controller: 'ctrllocation'
          }
      }
  })
  
  .state('tab.chefs',{
      url: '/chefs',      
      views:{
          'home':{
              templateUrl: 'shop/chefs/chefs.html',
              controller: 'ctrlchefs'
          }
      }
  })
  
  .state('tab.chefsProfile',{
      url: '/chefsProfile',      
      views:{
          'home':{
              templateUrl: 'shop/chefs/chef-profile.html',
              controller: 'ctrlchefsProfile'
          }
      }
  })
  
  .state('registration',{
    url: '/registration',
    templateUrl: 'shop/registration/registration.html',
    controller: 'registratonCtrl'
  })
  
  .state('tab.products',{
      url: '/products',      
      views:{
          'home':{
              templateUrl: 'shop/products/products.html',
              controller: 'ctrlproducts'
          }
      }
  })
  
  .state('tab.sell', {
    url: '/sell',
    views: {
      'sell': {
        templateUrl: 'shop/sell/sell.html'
      }
    }
  })
  
  

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/appload');

});
