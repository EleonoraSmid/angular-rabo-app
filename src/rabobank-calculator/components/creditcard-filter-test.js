describe('Creditcard filter', function() {
    var creditCardFilter;

    beforeEach(module('creditcard-filter-module'));

    beforeEach(inject(function ($filter) {
        creditCardFilter= $filter('creditcard-filter');
    }));

    it('should give a empty string back when NaN', function() {
    	var error = 'adsas'
    	var b = creditCardFilter(error)
    	expect(b).toBe('')
    })
    it('should not contain special chars', function(){
        var specialChar = '4345678912-34567'
        var b = creditCardFilter(specialChar)
        expect(b).toBe('');
    })
    it('should not contain white spaces', function(){
        var whiteSpaces = '4345678912 34567'
        var b = creditCardFilter(whiteSpaces)
        expect(b).toBe('');
    })
    it('should output with stars and creditcardtype', function(){
    	var convertedString = 434567891234567
    	var b = creditCardFilter(convertedString)
    	expect(b).toBe('************4567 (Visa)')
    })
});