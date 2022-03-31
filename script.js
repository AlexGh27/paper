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
     
    playerSelection = prompt();
    playerValue = playerSelection.toUpperCase();

    computerSelection = computerPlay();
    computerValue = computerSelection.toUpperCase();

    let p = playerValue;
    let c = computerValue;
    let result = '';
    let score = 0;
    

    if (p == 'ROCK' && c == 'PAPER') {
        result = 'You lose! Paper beats Rock';
        score = 1;
        console.log(result);
    }
    else if (p == 'ROCK' && c == 'SCISSORS') {
        result = 'You Win! Rock beats Scissors';
        score = 3;
        console.log(result);
    }
    else if (p == 'ROCK' && c == 'ROCK') {
        result = 'Draw!';
        score = 2;
        console.log(result);
    }

    else if (p == 'PAPER' && c == 'ROCK') {
        result = 'You win! Paper beats Rock';
        score = 3;
        console.log(result);
    }
    else if (p == 'PAPER' && c == 'Scissors') {
        result = 'You lose! Scissors beats Paper!';
        score = 1;
        console.log(result);
    }
    else if (p == 'PAPER' && c == 'PAPER') {
        result = 'Draw!';
        score = 2;
        console.log(result);
    }

    else if (p == 'SCISSORS' && c == 'PAPER') {
        result = 'You win! Scissors beats Paper';
        score = 3;
        console.log(result);
    }
    else if (p == 'SCISSORS' && c == 'ROCK') {
        result = 'You lose! Rock beats Scissors';
        score = 1;
        console.log(result);
    }
    else if (p == 'SCISSORS' && c == 'SCISSORS') {
        result = 'Draw!';
        score = 2;
        console.log(result);
    }
    return score; 
}   

function game() {

    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        let score = playRound();

        if (score == 3) {
            playerScore++;
        }
        if (score == 1) {
            computerScore++;
        }

    }
    console.log(`Final Score: You: ${playerScore} , Computer: ${computerScore}`);
}





    

