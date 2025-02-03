const scoreResult = document.getElementById('score-result');
const scoreMsg = document.getElementById('score-msg');
const playerSign = document.getElementById('player-sign');
const computerSign = document.getElementById('computer-sign');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score')

const choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

const playRound = (playerChoice) => {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = "Tie";
  } else {
    switch (playerChoice) {
      case "rock":
        result = (computerChoice === "scissors") ? "Win" : "Lose";
        break;
      case "paper":
        result = (computerChoice === "rock") ? "Win" : "Lose";
        break;
      case "scissors":
        result = (computerChoice === "paper") ? "Win" : "Lose";
        break;
    }
  }

  scoreResult.textContent = result

  switch (result) {
    case "Win":
      playerScore++;
      playerScoreDisplay.textContent = `Player score: ${playerScore}`;
      break;
    case "Lose":
      computerScore++;
      computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
      break;
  }
  
  switch (playerChoice) {
    case 'rock':
      playerSign.textContent = "✊"
      break
    case 'paper':
      playerSign.textContent = "✋"
      break
    case 'scissors':
      playerSign.textContent = "✌"
      break
  }

  switch (computerChoice) {
    case 'rock':
      computerSign.textContent = "✊"
      break
    case 'paper':
      computerSign.textContent = "✋"
      break
    case 'scissors':
      computerSign.textContent = "✌"
      break
  }
  GameOver()
}

const GameOver = () => {
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore === 5) {
      alert("You win the game")
    } else {
      alert("You lose the game")
    }
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = "Player score: 0";
    computerScoreDisplay.textContent = "Computer score: 0";
    scoreResult.textContent = "Win or Lose";
    playerSign.textContent = "😀";
    computerSign.textContent = "🤖";
  }
}