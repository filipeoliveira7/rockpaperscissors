function getComputerChoice(){
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function playRound(playerSelection, computerSelection){
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === "rock" && computerSelection === "rock")
  {
      return "It was a draw!";
  }

  else if (playerSelection === "rock" && computerSelection === "paper"){
      return `You lose! ${computerSelection} beats ${playerSelection}`;
  }

  else if (playerSelection === "rock" && computerSelection === "scissors"){
      return `You win! ${playerSelection} beats ${computerSelection}!`;
  }

  else if (playerSelection === "scissors" && computerSelection === "scissors"){
      return "It was a draw!";
  }
  else if (playerSelection === "scissors" && computerSelection === "rock"){
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
  else if (playerSelection === "scissors" && computerSelection === "paper"){
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  }    
  else if (playerSelection === "paper" && computerSelection === "scissors"){
      return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
  else if (playerSelection === "paper" && computerSelection === "paper"){
    return "It was a draw!";
  }
  else if (playerSelection === "paper" && computerSelection === "rock"){
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } 
}


function game(){
let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
  let playerSelection = prompt("Enter your selection: ");
  let computerSelection = getComputerChoice();
  let roundResult = playRound(playerSelection, computerSelection);
  
  console.log(roundResult);
  
  if (roundResult.startsWith("You win!")) {
    playerScore++;
  } else if (roundResult.startsWith("You lose!")) {
    computerScore++;
  }
}

if (playerScore > computerScore) {
  return "You win the game!";
} else if (playerScore < computerScore) {
  return "You lose the game!";
} else {
  return "The game is a draw!";
}
}

console.log(game());
