var age = prompt("Enter your age");

if(age < 0) {
  console.log("Hit me up when you're out of the womb!");
} else if(age === 21) {
  console.log("Happy 21st birthday!");
} else if(age % 2 == 1) {
  console.log("Your age is odd!");
}

if(age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
}
