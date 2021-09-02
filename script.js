let playerSelection;
let computerSelection;

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

const playRound = (playerSelection, computerSelection) => {
  playerSelection = window.prompt("Choose Rock, Paper, Scissor").toLowerCase();
  computerSelection = computerPlay();
  if (playerSelection == "rock" && computerSelection == "paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection == "paper" && computerSelection == "scissor") {
    return "You Lose! Scissor beats Paper";
  } else if (playerSelection == "scissor" && computerSelection == "rock") {
    return "You Lose! Rock beats Scissor";
  } else if (playerSelection == "scissor" && computerSelection == "paper") {
    return "You Win! Scissor beats Paper";
  } else if (playerSelection == "rock" && computerSelection == "scissor") {
    return "You Win! Rock beats Scissor";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You Win! Paper beats Rock";
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(playerSelection, computerSelection));
  }
};

game();
