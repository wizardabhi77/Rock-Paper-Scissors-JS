let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * 3)];
}

function getHumanChoice(){
    const userInput = window.prompt('Enter Your Choice:','Rock, Paper, Scissors');
    return userInput;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice.toLowerCase() === 'rock' && computerChoice === 'scissors' || 
        humanChoice.toLowerCase() === 'paper' && computerChoice === 'rock' ||
        humanChoice.toLowerCase() === 'scissors' && computerChoice === 'paper'){
            humanScore++;
            return console.log(`You win! ${humanChoice.toLowerCase()} beats ${computerChoice}`);
        }
    else if(humanChoice.toLowerCase() === computerChoice){
        return console.log('You Draw!');
    }
    else {
        computerScore++;
        return console.log(`You Lose!,${computerChoice} beats ${humanChoice.toLowerCase()}`);
    }
     
}

