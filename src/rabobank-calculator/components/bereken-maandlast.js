(function(){

	angular.module('components')
	.factory('BerekenMaandlastService', ['$http', function($http){
		var urlMaandLast = 'http://agile-wave-86684.herokuapp.com/current-mortgage-interest-rate'
		return {
			berekenMaandLast: function(){
				return $http({
					method: 'GET',
					url: urlMaandLast
				});
			}
		};
	}]);

})();