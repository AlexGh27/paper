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
            result = 1;
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
        }

        
    return 0; 
}   

function gameScore() {

    score.textContent = playerScore + ' - ' + computerScore;

    if (playerScore == 5) {
        final.textContent = 'Congratulations! You won the game!';
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5) {
        final.textContent = 'Game over! The computer won!';
        playerScore = 0;
        computerScore = 0;
    }


}

















