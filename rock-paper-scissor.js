


function getComputerChoice(){
    let choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * 3)];
}

function getHumanChoice(value){
    const userInput = value;
    return userInput;
}

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

function playGame(e) {

    let value = e.target.value;
    results.appendChild(para);
    let result = playRound(getHumanChoice(value), getComputerChoice());
    para.textContent= result + `|| Your Score: ${humanScore} || Opponet Score: ${computerScore}`;
    round++;

    if (humanScore >= 5) {
        para.textContent ='You WIN the GAME! || RESTART';
        humanScore= 0 ;
        computerScore = 0;
    }
    else if (computerScore >= 5) {
        para.textContent='you LOSE the GAME! || RESTART';
        humanScore= 0 ;
        computerScore = 0;
    }
}

const button = document.querySelectorAll(".btn");
const results = document.querySelector(".results");
const para = document.createElement("p");

let humanScore = 0;
let computerScore = 0;

let round = 0;

button.forEach((btn) => { addEventListener("click", playGame); });
    
