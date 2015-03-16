var expect = chai.expect;

describe('Bubble Sort',function(){
  describe('swap method',function(){
    it('it should be [1,2]',function(){
      var myArray = [2,1];
      var swappedArray = bubblesort.swap(myArray,0,1);
      expect(swappedArray).eql([1,2]);
    });
    it('should be [a,b]',function(){
      var myArray = ['b','a'];
      var swappedArray = bubblesort.swap(myArray,0,1);
      expect(swappedArray).eql(['a','b']);
    });
  });

  describe('bublesort method',function(){
    it('should be [1,2,3]',function(){
      var myArray = [2,3,1];
      var sortedArray = bubblesort.bubblesort(myArray);
      expect(sortedArray).eql([1,2,3]);
    });
    it('should be [3,10,20,1049,1050]',function(){
      var myArray = [20,1050,3,1049,10];
      var sortedArray = bubblesort.bubblesort(myArray);
      expect(sortedArray).eql([3,10,20,1049,1050]);
    });
    it('should be [a,b,c,d,e]',function(){
      var myArray = ['c','d','a','e','b'];
      var sortedArray = bubblesort.bubblesort(myArray);
      expect(sortedArray).eql(['a','b','c','d','e',]);
    });
  });
  describe('createArray method',function(){
    it('should be [3,1,4,3]',function(){
      var input = "3,1,4,3";
      var array = bubblesort.createArray(input);
      expect(array).eql([3,1,4,3]);
    });
    it('should be [d,a,c,l]',function(){
      var input = "d,a,c,l";
      var array = bubblesort.createArray(input);
      expect(array).eql(["d","a","c","l"]);
    });
    it('should be [3,10,50,1034]',function(){
      var input = "3,10,50,1034";
      var array = bubblesort.createArray(input);
      expect(array).eql([3,10,50,1034]);
    });
  });
  describe('isIntArray method',function(){
    it('should be true',function(){
      var array = "1,4,2,5,3";
      expect(bubblesort.isIntArray(array)).eql(true);
    });
    it('should be false',function(){
      var array = "a,f,e,j,d,a";
      expect(bubblesort.isIntArray(array)).eql(false);
    });
    it('should be false',function(){
      var array = "a,3,e,5,d,a";
      expect(bubblesort.isIntArray(array)).eql(false);
    });
    it('should be false',function(){
      var array = "a,@,e,!,d,a";
      expect(bubblesort.isIntArray(array)).eql(false);
    });

  });
});
