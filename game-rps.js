const playerDisplay = document.getElementById('player-display');
const computerDisplay = document.getElementById('computer-display');
const resultDisplay = document.getElementById('result');
const choices = ["rock", "paper", "scissors"];

const playGame = playerChoice => {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!"
    } else {
        switch(playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.innerHTML = `PLAYER: <span class="${playerChoice}-span">${playerChoice.toUpperCase()}</span>`;
    computerDisplay.innerHTML = `COMPUTER: <span class="${computerChoice}-span">${computerChoice.toUpperCase()}</span>`;
    resultDisplay.textContent = result;
}