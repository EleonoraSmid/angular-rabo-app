(function(){

	angular.module('components')
	.factory('BerekenMaxHypoService', ['$http', function($http){
		var urlMaxLoan = 'http://agile-wave-86684.herokuapp.com/max-to-loan'
		return {
			berekenMax: function(bedragOne, bedragTwo){
				return $http({
					method: 'GET',
					url: urlMaxLoan,
					params: {
						income1: bedragOne,
						income2: bedragTwo
					}
				});
			}
		};
	}]);

})();