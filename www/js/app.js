// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var serviceApp = angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.factory('Markers', function($http) {
 
  var markers = [];
 
  return {
    getMarkers: function(){
	
     
 
    }
  }
})


serviceApp.config(function($ionicConfigProvider) {

	$ionicConfigProvider.tabs.position('bottom'); // other values: top

})

.config(function($stateProvider, $urlRouterProvider) {
 
  $stateProvider
  
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
   .state('tab.home', {
		url: '/home',
		views: {
		'tab-home': {
		templateUrl: 'templates/tab-home.html',
		controller: 'HomeCtrl'
			}
		}
	})
    .state('tab.chats', {
		url: '/chats',
		views: {
		'tab-chats': {
		templateUrl: 'templates/tab-chats.html',
		controller: 'ChatCtrl'
			}
		}
	})
   .state('tab.account', {
		url: '/account',
		views: {
		'tab-account': {
		templateUrl: 'templates/tab-account.html',
		controller: 'AccountCtrl'
			}
		}
	})	
  .state('User_login', {
    url: '/',
    templateUrl: 'templates/login.html',
	controller: 'LoginCtrl'
  })
  .state('User_register', {
    url: '/register',
    templateUrl: 'templates/register.html'
  })
  
  .state('services', {
    url: "/services",
    templateUrl: "templates/services.html",
	controller: 'ServicesCtrl'
  })
 .state('profile', {
    url: "/profile",
    templateUrl: "templates/profile.html",
	controller: 'AccountCtrl'
  })
;
 
  $urlRouterProvider.otherwise("/");
 
})
