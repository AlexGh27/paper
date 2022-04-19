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



function playRound(playerSelection, computerSelection) {
     
    
    playerValue = playerSelection.toUpperCase();

    computerSelection = computerPlay();
    computerValue = computerSelection.toUpperCase();

    let p = playerValue;
    let c = computerValue;
    let result = '';
    let change = 0;
    

    if (p == 'ROCK' && c == 'PAPER') {
        result = 'You lose! Paper beats Rock';
        change = 1;
        final.textContent = result;
    }
    else if (p == 'ROCK' && c == 'SCISSORS') {
        result = 'You Win! Rock beats Scissors';
        change = 3;
        final.textContent = result;
    }
    else if (p == 'ROCK' && c == 'ROCK') {
        result = 'Draw!';
        change = 2;
        final.textContent = result;
    }

    else if (p == 'PAPER' && c == 'ROCK') {
        result = 'You win! Paper beats Rock';
        change = 3;
        final.textContent = result;
    }
    else if (p == 'PAPER' && c == 'Scissors') {
        result = 'You lose! Scissors beats Paper!';
        change = 1;
        final.textContent = result;
    }
    else if (p == 'PAPER' && c == 'PAPER') {
        result = 'Draw!';
        change = 2;
        final.textContent = result;
    }

    else if (p == 'SCISSORS' && c == 'PAPER') {
        result = 'You win! Scissors beats Paper';
        change = 3;
        final.textContent = result;
    }
    else if (p == 'SCISSORS' && c == 'ROCK') {
        result = 'You lose! Rock beats Scissors';
        change = 1;
        final.textContent = result;
    }
    else if (p == 'SCISSORS' && c == 'SCISSORS') {
        result = 'Draw!';
        change = 2;
        final.textContent = result;
    }
    return result; 
}   

const rock = document.querySelector('#button-rock');
const paper = document.querySelector('#button-paper');
const scissors = document.querySelector('#button-scissors');

let final = document.querySelector('#final');



let score = document.querySelector('score');

let playerScore = 0;
let computerScore = 0;

while (playerScore < 5 && computerScore < 5) {

    rock.addEventListener('click', function(e) {
        playRound('rock');
    });
    
    paper.addEventListener('click', function(e) {
        playRound('paper');
    });
    
    scissors.addEventListener('click', function(e) {
        playRound('scissors');
    });


}



