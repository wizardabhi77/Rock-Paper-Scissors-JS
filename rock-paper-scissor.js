function getComputerChoice(){
    let choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * 3)];
}

function getHumanChoice(){
    const userInput = window.prompt('Enter Your Choice:','Rock, Paper, Scissor');
    return userInput;
}

console.log('Hello World!');