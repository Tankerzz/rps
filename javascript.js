console.log("welcome to rock paper scissors, nigga");

function getComputerChoice(min = 1, max = 4) {
  const num = Math.floor(Math.random() * (max - min) + min);
  if (num === 1) return "rock";
  else if (num === 2) return "scissors";
  else if (num === 3) return "paper";
}

function getHumanChoice() {
  let question = prompt("rock, paper,scisors?");
  if (question.toLowerCase() === "scissors") return "scissors";
  else if (question.toLowerCase() === "rock") return "rock";
  else if (question.toLowerCase() === "paper") return "paper";
  else console.log("you didnt spell rock, paper, or scisors correctly");
}
let humanScore = 0;
let computerScore = 0;

function playGame() {
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  if (humanScore > computerScore) console.log("YOU WIN GAME CUNT");
  else if (computerScore > humanScore) console.log("YOU LOST CUNNTTT");
  else if (computerScore === humanScore) console.log("DRAW");
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) console.log("DRAW CUNT");
  else if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      console.log("lose cunt");
      computerScore++;
    } else if (computerChoice === "rock") {
      console.log("win cuunt");
      humanScore++;
    }
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      console.log("win carnt");
      humanScore++;
    } else if (computerChoice === "paper") {
      console.log("oh no lose");
      computerScore++;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      console.log("winna");
      humanScore++;
    } else if (computerChoice === "rock") {
      console.log("loser");
      computerScore++;
    }
  }
  console.log(humanScore, computerScore);

  // rock beat scissor
  // scissor beat paper
  // paper beat rock
}

playGame();
