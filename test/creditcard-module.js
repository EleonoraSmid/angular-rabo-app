angular.module('creditcard-filter-module', [])
    .filter('creditcard-filter', function () {
        return function (number) {
        	var notAnumber = ' '
        	var creditcardType
        	if(!isNaN(number)) {
        		console.log(number)
        		number = number.toString()
        		if(number.length > 13 && number.length < 17){
        			if(number[0] === '4'){
        				creditcardType = 'Visa'
        			} else if(number[0] === '3' && number[1] === '7' | number[1] === '4') {
        				creditcardType = 'American Express'
        			} else if(number[0] === '5') {
        				creditcardType = 'Mastercard'
        			} else {
        				return notAnumber
        			}
            		var newString = ''
            		for(var i = 0; i < number.length - 3; i++){
            			newString = newString.concat('*')
            		}
            		number = number.slice((number.length - 4), number.length )
            		newString = newString.concat(number)
            		number = newString + ' (' + creditcardType + ')'
            		return number 
           		 }
           	} else {
           		return notAnumber
           	}
        };
    });

    // .replace(/\B(?=(\d{3})+(?!\d))/g, "-")