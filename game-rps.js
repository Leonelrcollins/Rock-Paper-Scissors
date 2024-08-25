function getComputerChoice() {

    const randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper"; 
    } else {
        return "Scissors";
    }
}

const computerSelection = getComputerChoice();
console.log(computerSelection);

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if ( playerSelection === computerSelection ) {
        return "Draw! Try again"
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
               (playerSelection === "paper" && computerSelection === "rock") ||
               (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

const playerSelection = "rock";
console.log(playRound(playerSelection, computerSelection))

function game() {

    let playerScore = 0;
    let computerScore = 0;

    for (let round = 0; round < 5; round++) {
        const playerSelection = prompt("choose rock paper or scissors")
    }
}