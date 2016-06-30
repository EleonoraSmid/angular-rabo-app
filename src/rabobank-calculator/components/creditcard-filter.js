angular.module('creditcard-filter-module', [])
    .filter('creditcard-filter', function () {
        return function (number) {
        	var notAnumber = ''
        	var creditcardType
        	if(!isNaN(number)) {
        		number = number.toString()
            	function getCardType(numbers) {
        			if(numbers[0] === '4'){
        				creditcardType = 'Visa'
        			} else if(numbers[0] === '3' && numbers[1] === '7' | numbers[1] === '4') {
        				creditcardType = 'American Express'
        			} else if(numbers[0] === '5') {
        				creditcardType = 'Mastercard'
        			} else {
        				return notAnumber
        			}
            	}
        		function convertToStars(numbers) {
        			if(numbers.length > 13 && numbers.length < 17){
            			var newString = ''
            		for(var i = 0; i < numbers.length - 3; i++){
            			newString = newString.concat('*')
            		}
            		numbers = numbers.slice((numbers.length - 4), numbers.length )
            		newString = newString.concat(numbers)
            		number = newString + ' (' + creditcardType + ')'
            		return numbers
        			}
        		}
        		getCardType(number)
        		convertToStars(number)
        		return number
           	} else {
           		return notAnumber
           	}
        };
    });
