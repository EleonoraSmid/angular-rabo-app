(function(){

	angular.module('components')
	.factory('bounce', [function(){
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