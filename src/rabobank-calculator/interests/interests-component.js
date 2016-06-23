(function(){
	angular.module('interests', [])
	.component('interests', {
		controller: ['BerekenMaandlastService', InterestsController],
		controllerAs: 'ctrl',
		templateUrl: 'js/rabobank-calculator/interests/interests.html'
	})

	function InterestsController(BerekenMaandlastService) {
		var vm = this;
		var renteNummer
		vm.getDisabled = true

		vm.checkDisabled = function() {
			if(!isNaN(vm.bedragOne)){
				vm.getDisabled = false
			} else {
				vm.getDisabled = true
			}
		}
		
		BerekenMaandlastService.berekenMaandLast(vm.bedrag1)
			.then(function successCallback(response) {
				vm.maxLast = response.data.currentRate
				vm.buttonClick = function(){
					vm.totalText = 'Uw bruto maandlast: '
					vm.totaal = vm.bedragOne*(response.data.currentRate/100)/12
				};

			}, function errorCallback(error) {
				console.log(error)
		});
	};
})()