const {mean, median, mode} = require('./functions');
const ExpressError = require('./error');

  describe("mean", function () {
    it("throws error for the mean of an empty array", function () { 
        expect(() => mean([])).toThrow();
    })
    it("finds the mean of an array of numbers", function () { 
        expect(mean([1,1,2,4])).toEqual(2)
    })
  })
  
  describe("median", function(){
    it("throws error for the median of an empty array", function () { 
        expect(() => mean([])).toThrow();
    })
    it("finds the median of a set for a given array", function(){ 
        expect(median([1,1,2,4,9])).toEqual(2)
    })
  })
  
  describe("mode", function () {
    it("throws error for the mode of an empty array", function () { 
        expect(() => mean([])).toThrow();
    })
    it("finds the mode(s) of a given array", function () { 
      expect(mode([1,1,1,2,2,3])).toEqual([1])
    })
  })