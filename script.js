let playerSelection;
let computerSelection;
let count = 0;

const computerPlay = () => {
  let randomnumber = Number(Math.floor(Math.random() * 3));
  let computerChoice;
  switch (randomnumber) {
    case 0:
      computerChoice = "Rock";
      break;
    case 1:
      computerChoice = "Paper";
      break;
    case 2:
      computerChoice = "Scissor";
      break;
  }
  return computerChoice;
};

const playRound = (playerSelection, computerSelection) => {
  computerSelection = computerPlay();
  if (playerSelection == "Rock" && computerSelection == "Paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection == "Paper" && computerSelection == "Scissor") {
    return "You Lose! Scissor beats Paper";
  } else if (playerSelection == "Scissor" && computerSelection == "Rock") {
    return "You Lose! Rock beats Scissor";
  } else if (playerSelection == "Scissor" && computerSelection == "Paper") {
    count++;
    return "You Win! Scissor beats Paper";
  } else if (playerSelection == "Rock" && computerSelection == "Scissor") {
    count++;
    return "You Win! Rock beats Scissor";
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    count++;
    return "You Win! Paper beats Rock";
  }
};

document.body.addEventListener("click", (event) => {
  if (event.target.nodeName == "BUTTON") {
    playerSelection = event.target.value;
    console.log(playRound(playerSelection, computerSelection));
  }
  if (count == 5) {
    return "Congrats you won Rounds";
  }
});
/*const game = () => {
  console.log(playRound(playerSelection, computerSelection));
};

game();
*/
