(function(){
	angular.module('header', [])
	.component('headerComponent', {
		templateUrl: 'js/rabobank-calculator/header/header.html',
		controller: ['slideLeft', 'bounce', headerController],
		controllerAs: 'ctrl'
	})

	function headerController(slideLeft, bounce){
		var vm = this
		vm.buttonClick = function(){
			slideLeft.putClass('animated fadeInRight')
		}
		vm.mouseOver = function(event){
			bounce.putClass('animated bounce')
			if(event.target.id === 'buttonNavOne') {
				vm.addBounceOne = bounce.getClass()
			} else if (event.target.id === 'buttonNavTwo') {
				vm.addBounceTwo = bounce.getClass()
			} else if (event.target.id === 'buttonNavThree') {
				vm.addBounceThree = bounce.getClass()
			}
		}
		vm.mouseLeave = function(){
			vm.addBounceOne = ''
			vm.addBounceTwo = '' 
			vm.addBounceThree = ''
		}
	}
})()
