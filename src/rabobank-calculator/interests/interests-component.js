(function(){
	angular.module('interests', [])
	.component('interests', {
		controller: ['BerekenMaandlastService', 'gezamelijkInkomen', 'slideLeft', InterestsController],
		controllerAs: 'ctrl',
		templateUrl: 'js/rabobank-calculator/interests/interests.html'
	})

	function InterestsController(BerekenMaandlastService, gezamelijkInkomen, slideLeft) {
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
			if(bedrag < 0) {
				vm.error = 'error'
			} else {
				vm.error = ''
			}
		}
		vm.checkDisabled = function(){
			if(vm.bedragOne.value > 0){
				return false
			} else{
				return true
		}
		}
		BerekenMaandlastService.berekenMaandLast(vm.bedrag1)
			.then(function successCallback(response) {
				vm.maxLast = response.data.currentRate
				vm.buttonClick = function(){
					vm.totalText = 'Uw bruto maandlast: '
					vm.totaal = vm.bedragOne.value*(response.data.currentRate/100)/12
				};

			}, function errorCallback(error) {
				console.log(error)
		});
	};
})()