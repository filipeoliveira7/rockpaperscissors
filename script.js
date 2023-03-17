const options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const resultDisplay = document.querySelector(".result");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const playerImage = document.querySelector(".player-image");
const computerImage = document.querySelector(".computer-image");
const instructions = document.querySelector(".instructions");
const resetButton = document.querySelector("#reset-button");
instructions.style.display = "block";

rockButton.addEventListener("click", () => {
  playRound("rock");
});

paperButton.addEventListener("click", () => {
  playRound("paper");
});

scissorsButton.addEventListener("click", () => {
  playRound("scissors");
});

resetButton.addEventListener("click", () => {
  resetGame();
});

const scoreLimit = 5;

function playRound(playerSelection) {
  const computerSelection = options[Math.floor(Math.random() * options.length)];
  let result;
  if (playerSelection === computerSelection) {
    result = "draw";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = "win";
    playerScore++;
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
  } else {
    result = "lose";
    computerScore++;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
  }
  instructions.style.display = "none";

  resultDisplay.textContent = `You chose ${playerSelection}. The computer chose ${computerSelection}. You ${result}!`;

  // Check if game has ended
  if (playerScore === scoreLimit || computerScore === scoreLimit) {
    endGame();
    return;
  }
}

function endGame() {
  // Disable the buttons to prevent further gameplay
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;

  // Show the final result
  if (playerScore > computerScore) {
    resultDisplay.textContent = "Congratulations! You won the game!";
  } else if (computerScore > playerScore) {
    resultDisplay.textContent =
      "Sorry, you lost the game. Better luck next time!";
  } else {
    resultDisplay.textContent = "The game ended in a tie!";
  }

  // Show the reset button
  resetButton.style.display = "block";
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = "Player: 0";
  computerScoreDisplay.textContent = "Computer: 0";
  resultDisplay.textContent = "";
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
  resetButton.style.display = "none";
}
