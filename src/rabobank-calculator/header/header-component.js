(function(){
	angular.module('header', [])
	.component('headerComponent', {
		templateUrl: 'js/rabobank-calculator/header/header.html',
		controller: ['slideLeft', headerController],
		controllerAs: 'ctrl'
	})

	function headerController(slideLeft){
		var vm = this
		vm.buttonClick = function(){
			var thing = slideLeft.setStatus
			slideLeft.putClass('animated fadeInRight')
		}
		vm.mouseOver = function(){
			console.log('hey')
			vm.addBounce = 'animated bounce'
			console.log(vm.addBounce.className)
		}
	}
})()
