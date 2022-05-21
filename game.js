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
    playerSelection = "rock";
    computerSelection = computerPlay();

    if (playerSelection == "rock" && computerSelection == "rock")
    {
        return "It's a tie!";
    }
    else if (playerSelection == "rock" && computerSelection == "paper")
    {
        return "You lose! Paper beats rock!";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors")
    {
        return "You Win! Rock beats scissors!";
    }
}

console.log(playRound());