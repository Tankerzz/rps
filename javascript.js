console.log("hello, world nigga");

function getComputerChoice(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(getComputerChoice(1, 4));

function getHumanChoice() {
  prompt("rock, paper,scisors?");
}

console.log(getHumanChoice());
