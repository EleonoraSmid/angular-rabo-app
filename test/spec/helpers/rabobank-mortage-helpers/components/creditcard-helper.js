

describe('This should work', function(){
    var reverseFilter;
    
    beforeEach(module('module'));
	it('should work', function(){
		var b = false	
		expect(b).toBe(false) 
	})
})

describe('This should also work', function(){
	it('should work', function(){
		var b = ['one', 'two', 'three']
		expect(b).toContain('one') 
	})
})