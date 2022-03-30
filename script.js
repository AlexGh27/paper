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
     
    playerSelection = document.getElementById("myText").value;
    playerValue = playerSelection.toUpperCase();

    computerSelection = computerPlay();
    computerValue = computerSelection.toUpperCase();

    let p = playerValue;
    let c = computerValue;
    let result = '';

    if (p == 'ROCK' && c == 'PAPER') {
        result = 'You lose! Paper beats Rock';
    }
    else if (p == 'ROCK' && c == 'SCISSORS') {
        result = 'You Win! Rock beats Scissors'
    }
    else if (p == 'ROCK' && c == 'ROCK') {
        result = 'Draw!';
    }

    else if (p == 'PAPER' && c == 'ROCK') {
        result = 'You win! Paper beats Rock' ;
    }
    else if (p == 'PAPER' && c == 'Scissors') {
        result = 'You lose! Scissors beats Paper!';
    }
    else if (p == 'PAPER' && c == 'PAPER') {
        result = 'Draw!';
    }

    else if (p == 'SCISSORS' && c == 'PAPER') {
        result = 'You win! Scissors beats Paper';
    }
    else if (p == 'SCISSORS' && c == 'ROCK') {
        result = 'You lose! Rock beats Scissors';
    }
    else if (p == 'SCISSORS' && c == 'SCISSORS') {
        result = 'Draw!';
    }


    

    
}   





    

