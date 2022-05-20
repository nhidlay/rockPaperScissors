function computerPlay()
{
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    
    let computerChoice;
    if (randomNumber == 1)
    {
        computerChoice = "rock";
    }
    else if (randomNumber == 2)
    {
        computerChoice = "paper";
    }
    else if (randomNumber == 3)
    {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function playRound (playerSelection, computerSelection)
{
    let playerSelection = "rock";
    let computerSelection = computerPlay();


}

//console.log(computerPlay());