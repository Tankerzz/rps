console.log("hello, world nigga");

function getComputerChoice(min, max) {
  min = 1;
  max = 4;
  return Math.floor(Math.random() * (max - min) + min);
}

let question = prompt("rock, paper,scisors?");
function getHumanChoice() {
  if (question.toLowerCase() === "scissors") return "scissors";
  else if (question.toLowerCase() === "rock") return "rock";
  else if (question.toLowerCase() === "paper") return "paper";
}

console.log(getHumanChoice());
