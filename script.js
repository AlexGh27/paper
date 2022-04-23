function computerPlay() {
    let number = Math.floor(Math.random()*3);
    let option = '';
    if (number == 0) {
        option = 'Rock';
    }
    else if (number == 1) {
        option = 'Paper';
    }
    else {
        option = 'Scissors';
    }
    
    return option;
}


const rock = document.querySelector('#button-rock');
const paper = document.querySelector('#button-paper');
const scissors = document.querySelector('#button-scissors');


rock.addEventListener('click', function(e) {
    let playerSelection = 'rock';
    gameScore(playRound(playerSelection));
});

paper.addEventListener('click', function(e) {  
    let playerSelection = 'paper';
    gameScore(playRound(playerSelection));
});

scissors.addEventListener('click', function(e) {   
    let playerSelection = 'scissors';
    gameScore(playRound(playerSelection));
});



let playerScore = 0;
let computerScore = 0;

let final = document.querySelector('#final');
let score = document.querySelector('#score');



function playRound(playerSelection) {  
        
        let playerValue = playerSelection.toUpperCase();

        let computerSelection = computerPlay();
        let computerValue = computerSelection.toUpperCase();

        let p = playerValue;
        let c = computerValue;
        let textDisplay = '';
        let change = 0;


        if (p == 'ROCK' && c == 'PAPER') {
            textDisplay = 'You lose!';
            final.textContent = textDisplay;
            computerScore++;
        }
        else if (p == 'ROCK' && c == 'SCISSORS') {
            textDisplay = 'You win!';
            final.textContent = textDisplay;
            playerScore++;
        }
        else if (p == 'ROCK' && c == 'ROCK') {
            textDisplay = 'Draw!';
            final.textContent = textDisplay;
            computerScore++;
            playerScore++;
        }

        else if (p == 'PAPER' && c == 'ROCK') {
            textDisplay = 'You win!';
            final.textContent = textDisplay;
            playerScore++;
        }
        else if (p == 'PAPER' && c == 'SCISSORS') {
            textDisplay = 'You lose!';
            final.textContent = textDisplay;
            computerScore++;
        }
        else if (p == 'PAPER' && c == 'PAPER') {
            textDisplay = 'Draw!';
            final.textContent = textDisplay;
            computerScore++;
            playerScore++;
        }

        else if (p == 'SCISSORS' && c == 'PAPER') {
            textDisplay = 'You win!';
            final.textContent = textDisplay;
            playerScore++;
        }
        else if (p == 'SCISSORS' && c == 'ROCK') {
            textDisplay = 'You lose!';
            final.textContent = textDisplay;
            computerScore++;
        }
        else if (p == 'SCISSORS' && c == 'SCISSORS') {
            textDisplay = 'Draw!';
            final.textContent = textDisplay;
            computerScore++;
            playerScore++;
        }

        
    return 0; 
}   

function disableButtons() {
    document.querySelector('#button-rock').disabled = true;
    document.querySelector('#button-paper').disabled = true;
    document.querySelector('#button-scissors').disabled = true;
}


function gameScore() {

    score.textContent = playerScore + ' - ' + computerScore;

    if (playerScore == 5) {
        final.textContent = 'Congratulations! You won the game!';
        disableButtons();
        
    }
    else if (computerScore == 5) {
        final.textContent = 'Game over! The computer won!';
        disableButtons();
    }

}

let newMatch = document.querySelector('#match-button');

newMatch.addEventListener('click', function(e) {
    playNewMatch();
})




function playNewMatch() {
    playerScore = 0;
    computerScore = 0;
    score.textContent = playerScore + ' - ' + computerScore;
    document.querySelector('#button-rock').disabled = false;
    document.querySelector('#button-paper').disabled = false;
    document.querySelector('#button-scissors').disabled = false;
    final.textContent = '';

}





















