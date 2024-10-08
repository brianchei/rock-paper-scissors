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
    }
    choice = choice.toLowerCase()
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        console.log(choice);
        return choice;
    } else {
        console.log("invalid input, please type: \"rock\", \"paper\", or \"scissors\"");
        getHumanChoice();
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

function playGame(roundCount) {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < roundCount; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore === computerScore) {
        console.log("Tie game!")
    } else if (humanScore > computerScore) {
        console.log("You win!");
    } else {
        console.log("Computer wins!");
    }

    function playRound(humanChoice, computerChoice) {
        let winner = compareChoice(humanChoice, computerChoice);
        if (winner === "tie") {
            console.log(`Tie! You and the computer both chose ${humanChoice}!`);
            return winner;
        } else if (winner === "computer") {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
            return winner;
        } else if (winner === "human") {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
            return winner;
        } else {
            console.log("Unexpected error!");
            return winner;
        }
    }
}