//Perform sorting of an array in descending order.
function bubbleSortDescending(arr) {
    var len = arr.length;
  
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len - 1; j++) {
        if (arr[j] < arr[j + 1]) {
         
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr;
  }
  
  
  var myArray = [5, 2, 9, 1, 5, 6];
  var sortedArray = bubbleSortDescending(myArray);
  console.log(sortedArray);