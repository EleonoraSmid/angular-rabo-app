describe('Interests component', function() {
	var $httpBackend, deferred, gezamelijkInkomen, componentController, scope, $componentController;


	beforeEach(module('interests'));
	beforeEach(module('components'));

	beforeEach(inject(function($rootScope, $q, _$componentController_, _gezamelijkInkomen_) {
		scope = $rootScope.$new();
		$componentController = _$componentController_;
		gezamelijkInkomen = _gezamelijkInkomen_;
		componentController = $componentController('interests', {
			getCurrentInterestService: {
				getCurrentInterest: function(){
					deferred = $q.defer();
					console.log('getCurrentInterestService')
					return deferred.promise;
				}	
			}
		});
		
	}));

	describe('Happy ending', function() {
		it('moet geen error tonen als het gezamelijk inkomen correct is ingevuld', function() {
			componentController.changeInput(1);
			expect(componentController.error).toBe('')
		});

		it('should give number back if no errors', function() {
			deferred.resolve({data:{"currentRate":2.2}});
			scope.$digest();
			expect(componentController.maxLast).toBe(2.2);
		});

		it('should display given number from the calculator if so', function(){
			gezamelijkInkomen.setBedrag(4);
			componentController.$onInit();
			expect(componentController.bedragOne.value).toBe(4);
		});

		it('should enable the button when the amount is valid.', function(){
			componentController.bedragOne = {value: 2};
			expect(componentController.checkDisabled()).toBe(false);	
		});	
	});

	describe('Sad ending', function(){
		it('moet een error tonen als het gezamelijk inkomen niet correct is ingevuld', function() {
			componentController.changeInput(-1);
			expect(componentController.error).toBe('error')
		});
		it('should disable button if there is no valid number', function(){
			componentController.bedragOne = {value: -1};
			expect(componentController.checkDisabled()).toBe(true);
		});	
		it('shouldn\u0027t give a number back when there is no api call', function(){		
			deferred.reject('error')
			scope.$digest();
			expect(componentController.totalText).toBe('Whoops, something went wrong.')
		});
		it('shouldn\u0027t enable butten if there is no api call ', function(){

		});
	});

});