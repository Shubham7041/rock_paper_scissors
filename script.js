let playerSelection;
let computerSelection;
let count = 0;
const div = document.createElement("div");
const container = document.querySelector("#container");
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
    div.textContent = "You Lose! Paper beats Rock";
  } else if (playerSelection == "Paper" && computerSelection == "Scissor") {
    div.textContent = "You Lose! Scissor beats Paper";
  } else if (playerSelection == "Scissor" && computerSelection == "Rock") {
    div.textContent = "You Lose! Rock beats Scissor";
  } else if (playerSelection == "Scissor" && computerSelection == "Paper") {
    count++;
    div.textContent = "You Win! Scissor beats Paper";
  } else if (playerSelection == "Rock" && computerSelection == "Scissor") {
    count++;
    div.textContent = "You Win! Rock beats Scissor";
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    count++;
    div.textContent = "You Win! Paper beats Rock";
  }
  if (count == 5) {
    div.textContent = "You have won 5 rounds";
  }
  return container.appendChild(div);
};

document.body.addEventListener("click", (event) => {
  if (event.target.nodeName == "BUTTON") {
    playerSelection = event.target.value;
    playRound(playerSelection, computerSelection);
  }
});
/*const game = () => {
  console.log(playRound(playerSelection, computerSelection));
};

game();
*/
