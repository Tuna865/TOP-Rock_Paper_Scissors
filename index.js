/* To Do

Find introduce what option the player chose: 
    might do something other than prompt, 
    such as an input or form since I have used that before

*/
let options = [
    'rock',
    'paper',
    'scissors'
]

// returns a random choice from the 3 options in RPS
const getComputerChoice = () => {
    let compChoice = options[Math.floor(Math.random() * options.length)]
    return compChoice
}
console.log(getComputerChoice(options))

const getPlayerChoice = () => {
    
}


let compScore = 0
let playerScore = 0

// probably gonna need several conditionals for this 
const playRound = (compSelection, playerSelection) =>{
    let compChoice = getComputerChoice().toLowerCase()
    let playerChoice = playerChoice().toLowerCase()

    if(compChoice == playerChoice){
        console.log('Tie game')
    }else if(
    // round win conditions for comp (therefore, otherwise the player gets a point)
        (compChoice == 'rock' && playerChoice == 'scissors') ||
        (compChoice == 'scissors' && playerChoice == 'paper') ||
        (compChoice == 'paper' && playerChoice == 'rock')
    ){ ++compScore;
        if(compScore == 5){
            console.log('Box of enslaved lighning wins :/')
        }
    }else{++playerScore;
        if(playerScore == 5){
            console.log("That's a dub for humans!")
        }
    }
}

const game = () => {
    playRound(compChoice, playerChoice)
    for(let i = 0; i < 5; i++){
        if(compChoice === playerChoice){
            console.log('Draw game')
        } else if (compChoice > playerChoice){

        }
    }
}

