'use strict';

angular.module('myApp.jsonProvider', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/jsonprovider', {
    templateUrl: 'jsonprovider/index.html',
    controller: 'JsonProviderCtrl'
  });
}])

.controller('JsonProviderCtrl', ['$timeout', function($timeout) {
	var vm = this;
	vm.users = [];
	
	vm.init = function() {
		vm.getUsers();
	}
	
	vm.getUsers = function getUsers() {		
		var root = 'http://jsonplaceholder.typicode.com';

		$.ajax({
		  url: root + '/users',
		  method: 'GET'
		}).then(function(data) {
			$timeout(function() {
				vm.users = data;
			})
		  
		//  alert('dfdf');
		});

	};

}]);
