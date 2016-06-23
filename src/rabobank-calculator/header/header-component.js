(function(){
	angular.module('header-component', [])
	.component('headerComponent', {
		templateUrl: 'js/rabobank-calculator/header/header.html'
	}).controller('navController', [function(){
		this.buttonClick = function() {
			console.log('hey')
		}
	}])
})()