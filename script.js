let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genComChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const indx = Math.floor(Math.random() * 3);
  console.log(indx)
  return options[indx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorepara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} Beats ${compChoice}`;
  } else {
    compScore++;
    compScorepara.innerText = compScore;
    msg.innerText = `You Lost!  ${compChoice} Beats Your ${userChoice}`;
  }
};

const playGame = (userChoice) => {
  const compChoice = genComChoice();

  if (userChoice === compChoice) {
    drawGame();
    console.log("Hy")
  } 
  else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
