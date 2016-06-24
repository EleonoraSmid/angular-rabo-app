(function(){

	angular.module('components')
	.filter('calculateEuro', [function(){
		return function(input, symbol, place){
			if(isNaN(input)) {
				return input
			} else{

				var symbol = symbol || '$';
      			var place = place === undefined ? true : place;
				var toString = input.toString().split(".")
				toString[0] = toString[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
				toString.join(".")
				input = toString
      			if( place === true) {
       			 return symbol + input;
       		    } else {
        		  return input + symbol;
        		}
     		 }
     	}
	}]);

})();