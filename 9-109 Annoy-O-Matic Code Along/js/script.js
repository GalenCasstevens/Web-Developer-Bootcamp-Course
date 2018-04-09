// var answer = prompt("Are we there yet?");
//
// while(answer !== "yes" && answer !== "yeah") {
//   var answer = prompt("Are we there yet?");
// }
//
// alert("We finally arrived!");

// VERSION 2

var answer = prompt("Are we there yet?");

while(answer.indexOf("yes") === -1 && answer !== "yeah") {
  var answer = prompt("Are we there yet?");
}

alert("We finally arrived!");
