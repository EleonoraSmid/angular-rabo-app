(function(){

	angular.module('components')
	.factory('getCurrentInterestService', ['$http', function($http){
		var urlMaandLast = 'http://agil6684.herokuapp.com/current-mortgage-interest-rate'
		return {
			getCurrentInterest: function(){
				return $http({
					method: 'GET',
					url: urlMaandLast
				});
			}
		};
	}]);

})();