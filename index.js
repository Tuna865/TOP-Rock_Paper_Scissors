/* To Do

Add a reset game button
    gonna look at my Arcade project for this

*/
let options = [
    'rock',
    'paper',
    'scissors'
]

let buttonChoice = document.querySelectorAll(".button") 
let compChoice
let playerChoice
let compScore = 0
let playerScore = 0

// returns a random choice from the 3 options in RPS
const getComputerChoice = () => {
    let compChoice = options[Math.floor(Math.random() * options.length)]
    return compChoice
}

// chose to use this method for user input instead of a prompt
buttonChoice.forEach((button) =>{
    button.addEventListener("click", () => {
        const selection = button.querySelector("img")
        playerChoice = selection.alt.toLowerCase()
        console.log("player choice:", playerChoice)
        let compChoice = getComputerChoice(options)
        console.log("computer choice:", compChoice)

        playRound(compChoice, playerChoice)
    })
})

// probably gonna need several conditionals for this 
const playRound = (compChoice, playerChoice) =>{
    if(compChoice == playerChoice){
        console.log('Tie round, no points awarded', playerScore, compScore)
    }else if(
    // round win conditions for comp (therefore, otherwise the player gets a point)
        (compChoice == 'rock' && playerChoice == 'scissors') ||
        (compChoice == 'scissors' && playerChoice == 'paper') ||
        (compChoice == 'paper' && playerChoice == 'rock')
    ){ ++compScore 
        console.log("Computer scores", compScore, playerScore);
        if(compScore == 5){
            console.log('Box of enslaved lighning wins :/')
            reset()
        }
    }else{++playerScore
        console.log("Player scores", compScore, playerScore);
        if(playerScore == 5){
            console.log("That's a dub for humans!")
            reset()
        }
    }
}

const reset = () => {
    let playerScore =0
    let compScore =0

}