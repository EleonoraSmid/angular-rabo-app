(function(){

	angular.module('components')
	.factory('slideLeft', [function(){
		var setStatus
		return {
			putClass: function(status){
				setStatus = status
			},
			getClass: function(){
				return setStatus
			},
		}
	}]);
})();