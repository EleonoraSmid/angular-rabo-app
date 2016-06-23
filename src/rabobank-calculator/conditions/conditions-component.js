(function(){

	angular.module('conditions', [])
	.component('conditions', {
		templateUrl: 'js/rabobank-calculator/conditions/conditions.html',
		controller: [ConditionsController]
	})

	function ConditionsController() {
		var vm = this
	}
})()