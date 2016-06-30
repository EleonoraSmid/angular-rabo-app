(function(){
	angular.module('interests', [])
	.component('interests', {
		controller: ['getCurrentInterestService', 'gezamelijkInkomen', 'slideLeft', InterestsController],
		controllerAs: 'ctrl',
		templateUrl: 'js/rabobank-calculator/interests/interests.html'
	})

	function InterestsController(getCurrentInterestService, gezamelijkInkomen, slideLeft) {
		var vm = this;
		var renteNummer;
		vm.addClass = slideLeft.getClass()
		vm.$onInit = function() {
			if(gezamelijkInkomen.getBedrag() > 0) {
				vm.bedragOne = {
					value: gezamelijkInkomen.getBedrag(),
					options: {
						floor: 0,
						ceil: gezamelijkInkomen.getBedrag() + 20000,
						step: 1,
						minLimit: 1,
						maxLimit: gezamelijkInkomen.getBedrag() + 20000
					}
				};
			}else{
				vm.bedragOne = {
					value: 0,
					options: {
						floor: 0,
						ceil: 50000,
						step: 1,
						minLimit: 1,
						maxLimit: 50000
					}
				};
			}
		};

		vm.changeInput = function(bedrag){
			vm.error = bedrag < 0 ? 'error' : '';
		};
		vm.checkDisabled = function(){
			return vm.bedragOne.value <= 0;
		};
		getCurrentInterestService.getCurrentInterest(vm.bedrag1)
		.then(function(response) {
			vm.headerRente = 'Actuele hypotheekrente: ' + response.data.currentRate + '% voor 10 jaar.'
			vm.buttonClick = function(){
				vm.totalText = 'Uw bruto maandlast: '
				vm.totaal = vm.bedragOne.value*(response.data.currentRate/100)/12
			};
		}).catch(function(error) {
			vm.headerRente = "Whoops, er is iets stuk."
			vm.checkDisabled = function() {
				return true
			}
		});
	};
})()