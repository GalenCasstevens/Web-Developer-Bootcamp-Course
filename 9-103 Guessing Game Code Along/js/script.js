// create secret number
var secretNumber = 4;

// ask user for guess
var guess = prompt("Guess a number");
var stringGuess = Number(guess);

// check if guess if right
if(stringGuess === secretNumber) {
  alert("You got it right!");
} else if(stringGuess > secretNumber) {
  alert("Too high, guess again!");
} else {
  alert("Too low, guess again!");
}
