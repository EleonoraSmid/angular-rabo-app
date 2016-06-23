(function () {
	'use strict'

	angular.module('rabobank-calculator').component('raboMainComponent', {
		templateUrl: 'js/rabobank-calculator/rabobank-calculator.html',
		controller: [RaboMainController],
		$routeConfig: [
			{path: '/calculator', name: 'Calculator', component: 'calculator', useAsDefault: true},
			{path: '/rente', name: 'Rente', component: 'interests'},
			{path: '/voorwaarden', name: 'Voorwaarden', component: 'conditions'}
		]
	})

	function RaboMainController() {
		var vm = this
	}
})()