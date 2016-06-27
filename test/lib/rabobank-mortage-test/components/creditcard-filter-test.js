describe('Creditcard filter', function() {
    var creditCardFilter;

    beforeEach(module('creditcard-filter-module'));

    beforeEach(inject(function ($filter) {
        creditCardFilter= $filter('creditcard-filter');
    }));

    it('should give a empty string back when NaN', function() {
    	var error = 'adsas'
    	var b = creditCardFilter(error)
    	expect(b).toBe(' ')
    })
    it('should not contain special chars', function(){
        var specialChar = 434567891234567
        var b = creditCardFilter(specialChar)
        expect(b).not.toContain('-');
    })
    it('should convert to string and start with stars and the name of the creditcardbranch', function(){
    	var convertedString = 434567891234567
    	var b = creditCardFilter(convertedString)
    	expect(b).toBe('************4567 (Visa)')
    })
});