(function(bubblesort){

  var $output = document.getElementById('output');
  var $input = document.getElementById('array');
  var button = document.getElementById('sort');
  
    

  document.addEventListener('click', function(){
    $output.innerHTML ="";
    var inputArray = _createArray($input.value);
    var sortedArray = _bubblesort(inputArray);
    
    var $content = document.createTextNode(sortedArray);
    $output.appendChild($content);
  });

  function _createArray(string){
    var stringArray = string.split(',');
    var intArray;
    if(_isIntArray(string)){
      intArray = stringArray.map(function(number){
        return +number;
      });
      return intArray;
    }
    return stringArray;
  }

  function _bubblesort(array){
    var length = array.length;
    for(var i = 0; i<length; i++){
      for(var j = 0;j < length-1; j++){
        if(array[j]>array[j+1]){
        array = _swap(array,j,j+1);
        }
      }
    }
    return array;
  }

  function _isIntArray(string){
    var match = /^([\d]|,)+$/; //only digits and commas
    if(string.search(match) == -1){
      return false;
    }
    return true;
  }

  function _swap(array,firstIndex,secondIndex){
    var temp = array[firstIndex];
    
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;

    return array;
  }

  /* test purposes -remove with grunt */
  bubblesort.bubblesort = _bubblesort;
  bubblesort.swap = _swap;
  bubblesort.createArray = _createArray;
  bubblesort.isIntArray = _isIntArray;

  /* end test */
})(window.bubblesort = window.bubblesort || {});
