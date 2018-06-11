var p1Score = 0;
var p2Score = 0;
var p1ScoreView = document.querySelector("#p1Score");
var p2ScoreView = document.querySelector("#p2Score");
var h1 = document.querySelector("h1");
var winningScoreView = document.querySelector("#maxScore");
var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var numberInput = document.querySelector("input");
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", onP1ButtonClick);
p2Button.addEventListener("click", onP2ButtonClick);
resetButton.addEventListener("click", resetGame);
numberInput.addEventListener("change", onInputChange);

function onP1ButtonClick() {
  if(!gameOver) {
    p1Score++;
    if(p1Score == winningScore) {
      p1ScoreView.classList.add("winner");
      gameOver = true;
    }
    p1ScoreView.textContent = p1Score;

  }
}

function onP2ButtonClick() {
  if(!gameOver) {
    p2Score++;
    if(p2Score == winningScore) {
      p2ScoreView.classList.add("winner");
      gameOver = true;
    }
    p2ScoreView.textContent = p2Score;
  }
}

function resetGame() {
  gameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1ScoreView.textContent = p1Score;
  p2ScoreView.textContent = p2Score;
  p1ScoreView.className = "";
  p2ScoreView.className = "";
}

function onInputChange() {
  winningScoreView.textContent = numberInput.value;
  winningScore = numberInput.value;
  resetGame();
}
