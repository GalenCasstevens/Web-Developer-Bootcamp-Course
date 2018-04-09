var number = -10;

while(number <= 19) {
  console.log(number)
  number++;
}

console.log("");

number = 10;

while(number <= 40) {
  console.log(number);
  number += 2;
}

console.log("");

number = 301;

while(number <= 333) {
  console.log(number);
  number += 2;
}

console.log("");

number = 5;

while(number <= 50) {
  if(number % 5 == 0 && number % 3 == 0) {
    console.log(number);
  }
  number++;
}
