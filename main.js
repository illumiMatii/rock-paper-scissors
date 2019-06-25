document.addEventListener("DOMContentLoaded", function call(){
    getComputerChoice();
    game();
    main();
    res();
});


let userScore = 0;
let computerScore = 0;
let userScoreSpan = document.querySelector("#userscore");
let computerScoreSpan = document.querySelector("#computerscore");
let result = document.querySelector("#result > h1");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const restart = document.querySelector(".button");

function res(){
    restart.addEventListener("click", function(){
        userScore = 0;
        computerScore = 0;
        userScoreSpan.textContent = userScore;
        computerScoreSpan.textContent = computerScore;
        result.textContent = "";
    });
}

function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    let randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}



function win(userChoice, computerChoice){
    userScore++;
    userScoreSpan.textContent = userScore;
    result.textContent = userChoice + " beats " + computerChoice + ". You win!";
}

function lose(userChoice, computerChoice){
    computerScore++;
    computerScoreSpan.textContent = computerScore;
    result.textContent = computerChoice + " beats " + userChoice + ". You lose.";
}

function draw(){
    result.textContent = "It's a draw!";
}

function game(userChoice){
    let computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userChoice, computerChoice);
            break;
        case "RockPaper":
        case "ScissorsRock":
        case "PaperScissors":
            lose(userChoice, computerChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw();
            break;
    }
}


function main(){
    rock.addEventListener("click", function(){
        game("Rock");
    });
    
    paper.addEventListener("click", function(){
        game("Paper");
    });
    
    scissors.addEventListener("click", function(){
        game("Scissors");
    });
}



