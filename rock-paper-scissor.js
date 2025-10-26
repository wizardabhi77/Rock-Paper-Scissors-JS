

function getComputerChoice(){
    let choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * 3)];
}

function getHumanChoice(){
    const userInput = window.prompt('Enter Your Choice:','Rock, Paper, Scissors');
    return userInput;
}



function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
    if(humanChoice.toLowerCase() === 'rock' && computerChoice === 'scissors' || 
        humanChoice.toLowerCase() === 'paper' && computerChoice === 'rock' ||
        humanChoice.toLowerCase() === 'scissors' && computerChoice === 'paper'){
            humanScore++;
            return `You win! ${humanChoice.toLowerCase()} beats ${computerChoice}`;
        }
    else if(humanChoice.toLowerCase() === computerChoice){
            return 'You Draw!';
        }
    else {
            computerScore++;
            return `You Lose!,${computerChoice} beats ${humanChoice.toLowerCase()}`;
        }
     
    }

    let round = 0;

    while(round < 5){
        let result = playRound(getHumanChoice(), getComputerChoice());
        console.log(result, `\n Your Score: ${humanScore} \n Opponet Score: ${computerScore}`);
        round++;
    }

    if (humanScore > computerScore) {
        return console.log('You WIN the GAME!');
    }
    else {
        return console.log('you LOSE the GAME!');
    }
}

playGame();