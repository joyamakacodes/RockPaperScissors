const moves = ["rock", "paper", "scissors"];
let numberOfMoves = 10;

for (let i = 0; i <= moves.length; i++) {
  console.log(moves[i]);
}

function game(player, computer) {
  let playerWin = "1";
  let computerWin = "2";
  let tie = "0";

  // for(let i= 1; moves.l[i]; i++)
  // return playerWin;
  // for(let i= 2; moves[i]; i++)
  // return computerWin;
  // for(let i= 0; i=moves[i]; i++)
  // return tie;

  //return computerWin;
  // player scenario
  if (player === moves[0] && computer === moves[2]) return playerWin;

  if (player === moves[2] && computer === moves[1]) return playerWin;

  if (player === moves[1] && computer === moves[0]) return playerWin;

  // computer scenario
  if (computer === moves[0] && player === moves[2]) return computerWin;

  if (computer === moves[2] && player === moves[1]) return computerWin;

  if (computer === moves[1] && player === moves[0]) return computerWin;

  // tie scenario
  if (player === moves[0] && computer === moves[0]) return tie;

  if (player === moves[2] && computer === moves[2]) return tie;

  // if (player === moves[1] && computer === moves[1]) return tie;
}

function computerChoice() {
  let num = Math.floor(Math.random() * 3);

  return moves[num];
}

function playerChoice() {
  //let choice = "";

  document.querySelector(".options").addEventListener("click", (e) => {
    let choice;
    e.preventDefault();
    if (e.target.classList.contains("rock")) {
      console.log(moves[0]);
      choice = moves[0];
    }
    if (e.target.classList.contains("paper")) {
      choice = moves[1];
    }
    if (e.target.classList.contains("scissor")) {
      choice = moves[2];
    }

    console.log(choice);
    return choice;
  });

  // console.log(choice, "herwyyu")
  // return choice
}

function Winner(winID) {
  let result = document.querySelector(".result");
  result.textContent = "";

  if (winID === "1") {
    let intialPlayerWin = parseInt(
      document.querySelector(".p-count").textContent
    );
    intialPlayerWin++;

    document.querySelector(".p-count").textContent = "";
    document.querySelector(".p-count").append(`${intialPlayerWin}`);

    //display who won the round
    result.textContent = "Player wins";
    return;
  }

  if (winID === "2") {
    let initialComputerWin = parseInt(
      document.querySelector(".c-count").textContent
    );
    initialComputerWin++;

    document.querySelector(".c-count").textContent = "";
    document.querySelector(".c-count").append(`${initialComputerWin}`);

    //display who won the round
    result.textContent = "Computer wins";
    return;
  }

  if (winID === "0") {
    //display who won the round
    result.textContent = "Tie";
    return;
  }
}

function movesLeft() {
  let moveLeft = document.querySelector(".movesleft");
  moveLeft.textContent = "";
  let num = --numberOfMoves;
  moveLeft.textContent = `Moves left: ${num}`;
  return num;
}

function GameOver(movesLeft) {
  if (movesLeft == 0) {
    let gameOver = document.querySelector(".gameover");
    gameOver.textContent = "";
    let whoWon = document.createElement("p");
    whoWon.style.color = "white";
    let reloadBtn = document.createElement("button");
    reloadBtn.innerText = "Restart";
    reloadBtn.addEventListener("click", function (e) {
      window.location.reload();
    });

    gameOver.classList.toggle("show");
    gameOver.textContent = "GAME OVER!";
    document.querySelector(".result").textContent = "";
    document.querySelector(".rock").setAttribute("disabled", true);
    document.querySelector(".paper").setAttribute("disabled", true);
    document.querySelector(".scissor").setAttribute("disabled", true);

    let playerScoreBoard = parseInt(
      document.querySelector(".p-count").textContent
    );
    let computerScoreBoard = parseInt(
      document.querySelector(".c-count").textContent
    );

    console.log(playerScoreBoard, computerScoreBoard);
    if (playerScoreBoard > computerScoreBoard) {
      //player wins
      whoWon.textContent = "";
      whoWon.textContent = "Player wins this round";
    } else if (computerScoreBoard > playerScoreBoard) {
      //computer wins
      whoWon.textContent = "";
      whoWon.textContent = "Computer wins this round";
    } else {
      //it is a tie
      whoWon.textContent = "";
      whoWon.textContent = "It's a Tie!";
    }

    gameOver.appendChild(whoWon);
    gameOver.appendChild(reloadBtn);
  }
}

document.querySelector(".options").addEventListener("click", function (e) {
  e.preventDefault();

  if (
    e.target.classList.contains("rock") ||
    e.target.classList.contains("paper") ||
    e.target.classList.contains("scissor")
  ) {
    let player;
    if (e.target.classList.contains("rock")) player = moves[0];
    if (e.target.classList.contains("paper")) player = moves[1];
    if (e.target.classList.contains("scissor")) player = moves[2];
    console.log("player choice: ", player);

    // call computer
    let computer = computerChoice();
    console.log("computer choice: ", computer);

    // call game
    let winId = game(player, computer);

    console.log("winner is: ", winId);

    // call winner
    Winner(winId);

    // call moves left
    let moveCount = movesLeft();

    //call game over
    GameOver(moveCount);
  }
});
