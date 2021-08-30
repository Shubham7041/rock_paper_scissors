let playerSelection = window
  .prompt("Choose Rock, Paper, Scissor")
  .toLowerCase();
const computerSelection = computerPlay();

console.log(playerSelection);

const computerPlay = () => {
  let randomnumber = Number(Math.floor(Math.random() * 3));
  let computerChoice;
  switch (randomnumber) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissor";
      break;
  }
  return computerChoice;
};
