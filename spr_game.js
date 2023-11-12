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
                    console.log("Yay...draw!");
                    return "draw";
                case "PAPER":
                    console.log("Paper wraps and beats rock!");
                    return "computer";
                case "SCISSORS":
                    console.log("Rock smashes scissors!");
                    return "player";
            }
            break
        case "PAPER":
            switch(computer){
                case "ROCK":
                    console.log("Paper wraps and beats rock!");
                    return "player";
                case "PAPER":
                    console.log("Yay...draw!");
                    return "draw";
                case "SCISSORS":
                    console.log("Scissors cut paper!");
                    return "computer";
            }
            break
        case "SCISSORS":
            switch(computer){
                case "ROCK":
                    console.log("Rock smashes scissors!");
                    return "computer"
                case "PAPER":
                    console.log("Scissors cut paper!");
                    return "player";
                case "SCISSORS":
                    console.log("Yay...draw!");
                    return "draw";
            }
            break
    }
  }

function game(){
    let match = 0;
    let playerWin = 0;
    let computerWin = 0;
    let roundWin;

    while(match < 5){

        const playerSelection = prompt("Please enter Rock / Scissors /Paper. Which one you would like to play: ");
        const computerSelection = getComputerChoice();
        console.log("Player plays ",playerSelection,"; Computer plays ",computerSelection);
        roundWin = playRound(playerSelection,computerSelection);

        if( roundWin == "player"){
            playerWin++;
            console.log("You win round ",match+1,"!");
        }else if( roundWin == "computer"){
            computerWin++;
            console.log("Computer wins round ",match+1,"!");
        }else if(roundWin == "draw"){
            console.log("No winner in round ",match+1,"!");
        } else{
            console.log("That's not a valid choice. Try again!");
            continue;
        }
        match++;
    }

    summaryGame(playerWin, computerWin);

}

function summaryGame(playerWin, computerWin){
    console.log("Total wins for player: ",playerWin);
    console.log("Total wins for computer: ",computerWin);

    if(playerWin > computerWin ){
        console.log("You are the overall winner");
    }else if(playerWin < computerWin ){
        console.log("The computer is the overal winner");
    } else{
        console.log("You've drawn...No winner this time!");
    }
}

game();