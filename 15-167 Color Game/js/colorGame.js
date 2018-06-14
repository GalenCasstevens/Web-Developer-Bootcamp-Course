var colors = [];
var squares = document.querySelectorAll(".square");
var squareCount = 6;
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var modeButtons  = document.querySelectorAll(".mode");

init();

function init() {
  setupModeButtons();
  setupSquareButtons();
  reset();
}

resetButton.addEventListener("click", onResetButtonClick);

colorDisplay.textContent = pickedColor;

function setupModeButtons() {
  for(var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", onModeButtonClick);
  }
}

function setupSquareButtons() {
  for(var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", onSquareClick);
  }
}

function onModeButtonClick() {
  modeButtons[0].classList.remove("selected");
  modeButtons[1].classList.remove("selected");
  this.classList.add("selected");
  this.textContent === "Easy" ? squareCount = 3: squareCount = 6;
  reset();
}

function reset() {
  colors = generateRandomColors(squareCount);
  pickedColor = pickColor();
  messageDisplay.textContent = "";
  colorDisplay.textContent = pickedColor;

  for(var i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }

  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Colors";
}

function onResetButtonClick() {
  reset();
}

function onSquareClick() {
  var clickedColor = this.style.backgroundColor;

  if(clickedColor === pickedColor) {
    messageDisplay.textContent = "Correct!";
    changeToWinningColor(pickedColor);
    resetButton.textContent = "Play Again?";
    h1.style.backgroundColor = pickedColor;
  } else {
    this.style.backgroundColor = "#232323";
    messageDisplay.textContent = "Try again";
  }
}

function changeToWinningColor(winningColor) {
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = winningColor;
  }
}

function pickColor() {
  var randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function generateRandomColors(numColors) {
  var generatedColors = [];

  for(var i = 0; i < numColors; i++) {
    generatedColors[i] = randomColor();
  }

  return generatedColors;
}

function randomColor() {
  var redParam = Math.floor(Math.random() * 256);
  var greenParam = Math.floor(Math.random() * 256);
  var blueParam = Math.floor(Math.random() * 256);

  return "rgb(" + redParam + ", " + greenParam + ", " + blueParam + ")";
}
