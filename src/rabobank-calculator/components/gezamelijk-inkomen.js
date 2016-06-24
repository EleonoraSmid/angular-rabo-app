(function(){

	angular.module('components')
	.factory('gezamelijkInkomen', [function(){
		var bedrag;

		return {
			setBedrag: function(newBedrag) {
				bedrag = newBedrag;
			},

			getBedrag: function() {
				return bedrag;
			}
		}
	}]);

})();