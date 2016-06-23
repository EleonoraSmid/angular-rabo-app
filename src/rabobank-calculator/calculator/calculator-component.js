(function () {
	'use strict'

	angular.module('calculator').component('calculator', {
		templateUrl: 'js/rabobank-calculator/calculator/calculator.html',
		controller: ['BerekenMaxHypoService', CalculatorController],
		controllerAs: 'ctrl'
	});

	function CalculatorController(BerekenMaxHypoService) {
		var vm = this;
		vm.getDisabled = true

		vm.checkDisabled = function() {
			console.log(typeof vm.bedragOne)
			vm.getDisabled = false
		}
		
		vm.buttonClick = function(){
			BerekenMaxHypoService.berekenMax(vm.bedrag1, vm.bedrag2)
				.then(function successCallback(response) {
					vm.maxBijlenenText = 'U kunt maximaal bijlenen: '
					vm.totaalBedrag = response.data.maxToLoan

				}, function errorCallback(error) {
					console.log(error)
				});
			};
		};
})();
