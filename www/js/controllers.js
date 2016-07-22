angular.module('starter.controllers', ['LoginService','ngCordova'])

serviceApp.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state,$http) {
    $scope.data = {};
	console.log('posts controllers loaded');
	
    $scope.login = function() {
		
		
		$http.post('http://192.200.12.142/Laravel-5/public/api/users/login?email=abhishek.maurya@srmtechsol.com&password=admin123').then(function(response){
			//the response from the server is now contained in 'response'
			alert( response.data.response.loginStatus );
		}, function(error){
			//there was an error fetching from the server
		});
		
		
		alert($scope.data.username);
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tab.home');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})

serviceApp.controller('HomeCtrl', function($scope) {
	
})
serviceApp.controller('ChatCtrl', function($scope) {
	$scope.openPhotoLibrary = function(){
		var options = {
            fileKey: "avatar",
            fileName: "dig-greece.jpg",
            chunkedMode: false,
            mimeType: "image/jpeg"
        };
        $cordovaFileTransfer.upload("http://192.200.12.109:8100", "/android_asset/www/img/ionic.png", options).then(function(result) {
            console.log("SUCCESS: " + JSON.stringify(result.response));
        }, function(err) {
            console.log("ERROR: " + JSON.stringify(err));
        }, function (progress) {
            // constant progress updates
        });
	}
    
})
serviceApp.controller('AccountCtrl', function($scope,$ionicModal) {

})

serviceApp.controller('ServicesCtrl', function($scope,$ionicModal) {
	
	
	$ionicModal.fromTemplateUrl('templates/services.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal;
	});
	$scope.openModal = function() { 
		$scope.modal.show();
	};
	$scope.closeModal = function() {
		$scope.modal.hide();
	};
	$scope.$on('$destroy', function() {
		$scope.modal.remove();
	});
	
	$scope.$watch('testToggle',function(value) {
		if(value == true){
			
			$scope.modal.show();
		}
	});
		
})

serviceApp.controller('ProfileCtrl', function($scope) {
	
	//var eventBtn = 0
	$scope.editIco = true;
	$scope.eeditIco = true;
	$scope.peditIco = true;
	$scope.viewNow = function() { 
		$scope.showBtn = true ;
		$scope.editIco = false;
	};
	$scope.closeNow = function(eB) { 
		$scope.showBtn = false;
		$scope.editIco = true;
	};
	$scope.eviewNow = function() { 
		$scope.eshowBtn = true ;
		$scope.eeditIco = false;
	};
	$scope.ecloseNow = function(eB) { 
		$scope.eshowBtn = false;
		$scope.eeditIco = true;
	};
	$scope.pviewNow = function() { 
		$scope.pshowBtn = true ;
		$scope.peditIco = false;
	};
	$scope.pcloseNow = function(eB) { 
		$scope.pshowBtn = false;
		$scope.peditIco = true;
	};
})

