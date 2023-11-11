function getComputerChoice(){
    let options = ["Rock","Paper","Scissors"];
    return options[Math.floor(Math.random()*options.length)];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toUpperCase();
    let computer = computerSelection.toUpperCase();
    
    switch(player){
        case "ROCK":
            switch(computer){
                case "ROCK":
                    return "Yay...draw!";
                case "PAPER":
                    return "You loose... Paper beats rock!";
                case "SCISSORS":
                    return "You win!Rock smashes scissors";
            }
            break
        case "PAPER":
            switch(computer){
                case "ROCK":
                    return "You win!Paper wraps and beats rock";
                case "PAPER":
                    return "Yay...draw!";
                case "SCISSORS":
                    return "You loose...scissors cut paper";
            }
            break
        case "SCISSORS":
            switch(computer){
                case "ROCK":
                    return "You loose... Rock smashes scissors!";
                case "PAPER":
                    return "You win! Scissors cut paper";
                case "SCISSORS":
                    return "Yay...draw!";
            }
            break
    }
  }
   
 /*  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection)); */

function game(){
    
}