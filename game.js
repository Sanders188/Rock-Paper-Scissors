let message = '';

function getComputerChoice() {
    let rock = 1;
    let paper = 2;
    let scissors = 3;
    let randomNumber = Math.floor(Math.random()*3) + 1;
    console.log(randomNumber);
    let compChoice = '';

    if (randomNumber == rock) {
        //return console.log('rock');
        compChoice = 'rock';
        console.log(compChoice);
        return compChoice;
    } else if (randomNumber == paper) {
       // console.log('paper')
       compChoice = 'paper'
       console.log(compChoice);
       return compChoice
    } else if (scissors) {
        //console.log('scissors')
        compChoice = 'scissors'
        console.log(compChoice);
        return compChoice

    }
}

function playRound(playerSelection, computerSelection) {

    let lowerCasePlayerSelection = playerSelection.toLowerCase();

    if (lowerCasePlayerSelection == computerSelection) {
        message = "It's a tie, try again";
        //console.log(message);
        return message;
    } else if (lowerCasePlayerSelection == 'rock' && computerSelection == 'paper') {
        message = 'you lose'
        //console.log(message);
        return message;
    } else if (lowerCasePlayerSelection == 'rock' && computerSelection == 'scissors') {
        message = 'you win';
        //console.log(message);
        return message;
    } else if (lowerCasePlayerSelection == 'scissors' && computerSelection == 'paper') {
        message = 'you win';
        //console.log(message);
        return message;
    } else if (lowerCasePlayerSelection == 'scissors' && computerSelection == 'rock') {
        message = 'you lose';
        //console.log(message);
        return message;
    } else if (lowerCasePlayerSelection == 'paper' && computerSelection == 'scissors') {
        message = 'you lose';
        //console.log(message);
        return message;
    } else if (lowerCasePlayerSelection == 'paper' && computerSelection == 'rock') {
        message = 'you win';
       // console.log(message);
        return message;
    }

}

function game() {

    let playerScore = 0;
    let computerScore = 0;

    let winLoseMessage = '';

    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
        if (message == 'you lose') {
            computerScore += 1;
        } else {
            playerScore += 1;
        }
    }

    if (playerScore > computerScore) {
        winLoseMessage = 'congratulations, you win';
        return winLoseMessage;
    } else if (playerScore < computerScore) {
        winLoseMessage = 'you lose';
        return winLoseMessage
    } else {
        winLoseMessage = 'you tied';
        return winLoseMessage;
    }

}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));

console.log(game());
