function getComputerChoice(){
    let options = ["Rock","Paper","Scissors"];
    return options[Math.floor(Math.random()*options.length)];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toUpperCase();
    let computer = computerSelection.toUpperCase();
    const MESSAGE_DRAW = "Yay...draw!";
    const MESSAGE_PAPER_ROCK = "Paper wraps and beats rock!";
    const MESSAGE_ROCK_SCISSORS = "Rock smashes scissors!";
    const MESSAGE_SCISSORS_PAPER = "Scissors cut paper!";
    
    switch(player){
        case "ROCK":
            switch(computer){
                case "ROCK":
                    console.log(MESSAGE_DRAW);
                    return "draw";
                case "PAPER":
                    console.log(MESSAGE_PAPER_ROCK);
                    return "computer";
                case "SCISSORS":
                    console.log(MESSAGE_ROCK_SCISSORS);
                    return "player";
            }
            break
        case "PAPER":
            switch(computer){
                case "ROCK":
                    console.log(MESSAGE_PAPER_ROCK);
                    return "player";
                case "PAPER":
                    console.log(MESSAGE_DRAW);
                    return "draw";
                case "SCISSORS":
                    console.log(MESSAGE_SCISSORS_PAPER);
                    return "computer";
            }
            break
        case "SCISSORS":
            switch(computer){
                case "ROCK":
                    console.log(MESSAGE_ROCK_SCISSORS);
                    return "computer"
                case "PAPER":
                    console.log(MESSAGE_SCISSORS_PAPER);
                    return "player";
                case "SCISSORS":
                    console.log(MESSAGE_DRAW);
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