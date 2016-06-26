(function () {
	'use strict';

	angular.module('calculator').component('calculator', {
		templateUrl: 'js/rabobank-calculator/calculator/calculator.html',
		controller: ['BerekenMaxHypoService', 'gezamelijkInkomen', 'slideLeft', CalculatorController],
		controllerAs: 'ctrl'
	});

	function CalculatorController(BerekenMaxHypoService, gezamelijkInkomen, slideLeft) {
		var vm = this
		vm.bedrag1 = {
			value: 0,
    		options: {
      			floor: 0,
      			ceil: 50000,
      			step: 1,
      			minLimit: 1,
     	 		maxLimit: 50000
    		}
		};
		vm.bedrag2 = {
			value: 0,
    		options: {
      			floor: 0,
      			ceil: 50000,
      			step: 1,
      			minLimit: 1,
     	 		maxLimit: 50000
    		}
		};
		vm.addClass = slideLeft.getClass()
		vm.checkDisabled = function() {
			if(vm.bedrag1.value > 0){
				return false
			} else{
				return true
		}
		}
		vm.changeInput = function(bedrag){
			if(bedrag < 0) {
				vm.error = 'error'
			} else {
				vm.error = ''
			}
		}
		vm.buttonClick = function(){
			BerekenMaxHypoService.berekenMax(vm.bedrag1.value, vm.bedrag2.value)
				.then(function successCallback(response) {
					if(response.data.maxToLoan > 0){
						vm.maxBijlenenText = 'U kunt maximaal bijlenen: ';
						vm.totaalBedrag = response.data.maxToLoan;
						gezamelijkInkomen.setBedrag(vm.totaalBedrag);
					}
				}, function errorCallback(error) {
					console.log(error);
				});
			};
		};
})();
