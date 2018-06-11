// reverse array
function reverseArray(array) {
  var reverseArray = array.slice(0);

  for(var i = 0; i < reverseArray.length; i++) {
    reverseArray[i] = array[array.length - 1 - i];
  }

  return reverseArray;
}

// isUniform
function isUniform(array) {
  for(var i = 0; i < array.length - 1; i++) {
    if(array[i] !== array[i + 1]) {
      return false
    }
  }
  return true;
}

// sum array
function sumArray(array) {
  var count = 0;

  array.forEach(function(num) {
    count += num;
  });

  return count;
}

// max value in array
function maxNumArray(array) {
  var maxNum = array[0];

  for(var i = 0; i < array.length; i++) {
    if(maxNum < array[i]) {
      maxNum = array[i];
    }
  }

  return maxNum;
}

// print array
function printArray(array) {
  for(var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

var myArray = [0, 2, -1, 4, 99, 23];
var test1 = [2, 2, 2, 2, 2, 2];
var test2 = [0, 2, 2, 2, 2, 2];
var test3 = [0, 2, 2, 2, 2, 2];
var test4 = ["b", "b", "b", "b", "b", "b"];
printArray(reverseArray(myArray));
console.log(isUniform(myArray));
console.log(isUniform(test1));
console.log(isUniform(test2));
console.log(isUniform(test3));
console.log(isUniform(test4));
console.log(sumArray(myArray));
console.log(maxNumArray(myArray));
