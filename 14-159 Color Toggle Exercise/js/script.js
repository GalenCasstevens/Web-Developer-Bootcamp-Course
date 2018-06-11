var buttonPressed = 0;
var button = document.querySelector("button");
var body = document.querySelector("body");

button.addEventListener("click", onButtonClick);

function onButtonClick() {
  if(buttonPressed % 2 === 0) {
    body.className = "";
    body.classList.add("neon");
  } else if(buttonPressed % 2 === 1) {
    body.className = "";
    body.classList.add("purple");
  }
  buttonPressed++;
}
