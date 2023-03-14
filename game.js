function getComputerChoice(){
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

let computerSelection = getComputerChoice();

let playerSelection = "rock";

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    // let draw = alert("It was a draw!")
    // let win  = alert(`You win! ${playerSelection} beats ${computerSelection}!`)
    // let lose = alert(`You lose! ${computerSelection} beats ${playerSelection}`)

    if (playerSelection === "rock" && computerSelection === "rock")
    {
        return alert("It was a draw!")
    }

    else if (playerSelection === "rock" && computerSelection === "paper"){
        return lose = alert(`You lose! ${computerSelection} beats ${playerSelection}`)
    }

    else if (playerSelection === "rock" && computerSelection === "scissors"){
        return alert(`You win! ${playerSelection} beats ${computerSelection}!`)
    }

    else if (playerSelection === "scissors" && computerSelection === "scissors"){
        return alert("It was a draw!")
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
      return alert(`You lose! ${computerSelection} beats ${playerSelection}`)
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
      return alert(`You win! ${playerSelection} beats ${computerSelection}!`)
    }    
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        return lose = alert(`You lose! ${computerSelection} beats ${playerSelection}`)
    }
    else if (playerSelection === "paper" && computerSelection === "paper"){
      return alert("It was a draw!")
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
      return alert(`You win! ${playerSelection} beats ${computerSelection}!`)
    } 
}

console.log(playRound(playerSelection, computerSelection))