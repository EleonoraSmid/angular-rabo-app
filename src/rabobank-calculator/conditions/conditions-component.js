(function(){

	angular.module('conditions', [])
	.component('conditions', {
		templateUrl: 'js/rabobank-calculator/conditions/conditions.html',
		controller: ['slideLeft', ConditionsController],
		controllerAs: 'ctrl'
	})

	function ConditionsController(slideLeft) {
		var vm = this
		vm.addClass = slideLeft.getClass()
	}
})()