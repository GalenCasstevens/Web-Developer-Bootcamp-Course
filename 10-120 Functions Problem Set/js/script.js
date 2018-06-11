function isEven(num) {
  if(num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function factorial(num) {
  var counter = num - 1;

  if(num === 0) {
    return 1;
  } else {
    while(counter > 1) {
      num *= counter;
      counter--;
    }

    return num;
  }
}

function kebabToSnake(kebabString) {
  return kebabString.split("-").join("_");
}

console.log(isEven(422));
console.log(factorial(5));
console.log(kebabToSnake("hi-there-man"));
