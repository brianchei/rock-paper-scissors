/*
Pseudocode
Declare play game function
    Declare play round function
    Declare/initialize score variables
    Calculate random computer choice ||
    Ask user for input
    If rock
        Log/print choice
        Compare choices ||
        Player win?
            Increment player score
            Log winner announcement
            Else increment computer score
            Log winner announcement
    If paper
        Log/print choice
        Compare choices ||
        Player win?
            Increment player score
            Log winner announcement
            Else increment computer score
            Log winner announcement
    If scissors
        Log/print choice
        Compare choices ||
        Player win?
            Increment player score
            Log winner announcement
            Else increment computer score
            Log winner announcement


Calculate random computer choice
Start
Generate random number 0-2
If 0
    Set computer choice rock
If 1
    Set computer choice paper
If 2
    Set computer choice scissors


Compare choices
  Start
  If player choice equal computer choice
    Tie announcement
  Else if player choice rock
    If computer choice equal paper
        Increment computer score
        Winner announcement
    Else
        Increment player score
        Winner announcement
  Else if player choice paper
    If computer choice equal scissors
        Increment computer score
        Winner announcement
    Else
        Increment player score
        Winner announcement
  Else if player choice scissors
    If computer choice equal rock
        Increment computer score
        Winner announcement
    Else
        Increment player score
        Winner announcement
*/

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    console.log(choice);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("rock, paper, or scissors?");
    if (!choice) {
        console.log("falsy value input, please type: \"rock\", \"paper\", or \"scissors\"");
        return getHumanChoice();
    }
    choice = choice.toLowerCase()
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        console.log(choice);
        return choice;
    } else {
        console.log("invalid input, please type: \"rock\", \"paper\", or \"scissors\"");
        return getHumanChoice();
    }
}

function compareChoice(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "tie";
    }
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            return "computer";
        } else {
            return "human";
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            return "computer";
        } else {
            return "human";
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            return "computer";
        } else {
            return "human";
        }
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    while (humanScore < 5 && computerScore < 5) {
        let winner = compareChoice(humanChoice, computerChoice);
        if (winner === "tie") {
            results.textContent = `Tie! You and the computer both chose ${humanChoice}!`
            scoreboard.textContent = `You: ${humanScore}\nComputer: ${computerScore}`;
            return winner;
        } else if (winner === "computer") {
            computerScore++;
            results.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`
            scoreboard.textContent = `You: ${humanScore}\nComputer: ${computerScore}`;
            return winner;
        } else if (winner === "human") {
            humanScore++;
            results.textContent = `You win! ${humanChoice} beats ${computerChoice}!`
            scoreboard.textContent = `You: ${humanScore}\nComputer: ${computerScore}`;
            return winner;
        } else {
            results.textContent = "Unexpected error!";
            return winner;
        }
    }
    if (humanScore === 5) {
    results.textContent = "Congratulations! You won!";
    } else {
    results.textContent = "Sorry, the computer won!";
    }
}

// UI

let choices = document.createElement('div');
let results = document.createElement('div');
results.textContent = 'Results';
let scoreboard = document.createElement('div');
scoreboard.textContent = 'Scoreboard';

let content = document.querySelector('.content');
content.appendChild(choices);
content.appendChild(results);
content.appendChild(scoreboard);


let rock = document.createElement('button');
rock.textContent = 'ROCK';
let paper = document.createElement('button');
paper.textContent = 'PAPER';
let scissors = document.createElement('button');
scissors.textContent = 'SCISSORS';

rock.classList.add('button');
paper.classList.add('button');
scissors.classList.add('button');

rock.addEventListener('click', () => {playRound('rock', getComputerChoice())})
paper.addEventListener('click', () => {playRound('paper', getComputerChoice())})
scissors.addEventListener('click', () => {playRound('scissors', getComputerChoice())})

choices.classList.add('choices')
results.classList.add('result');
scoreboard.classList.add('scoreboard');

choices.appendChild(rock);
choices.appendChild(paper);
choices.appendChild(scissors);