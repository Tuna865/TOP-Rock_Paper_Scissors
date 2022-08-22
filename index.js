let options = [
    'rock',
    'paper',
    'scissors'
]

let buttonChoice = document.querySelectorAll(".button") 
let resetButton = document.querySelector(".resetButton")
let gameInfo = document.getElementById('gameInfo')
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
        
        let compChoice = getComputerChoice(options)
        
        playRound(compChoice, playerChoice)
    })
})

const playRound = (compChoice, playerChoice) =>{
    if(compChoice == playerChoice){
        gameInfo.innerHTML = (`Tie round, no points awarded. Comp:${compScore} Player:${playerScore}`)
    }else if(
        // round win conditions for comp (therefore, otherwise the player gets a point)
        (compChoice == 'rock' && playerChoice == 'scissors') ||
        (compChoice == 'scissors' && playerChoice == 'paper') ||
        (compChoice == 'paper' && playerChoice == 'rock')
        ){ ++compScore 
            gameInfo.innerHTML = (`Computer scores, Comp:${compScore} Player:${playerScore}`);
            if(compScore == 5){
                gameInfo.innerHTML = (`Box of enslaved lighning wins :/ Comp:${compScore} Player:${playerScore}`)
            }
        }else{++playerScore
            gameInfo.innerHTML = (`Player scores, Comp:${compScore} Player:${playerScore}`);
            if(playerScore == 5){
                gameInfo.innerHTML = (`That's a dub for humans! Comp:${compScore} Player:${playerScore}`)
            }
        }
    }
    
// resets the game by simply refreshing the page 
resetButton.addEventListener("click", () => {
    gameInfo.innerHTML = ("The game will reset in 5 seconds")
    setTimeout(startOver = () => {
        window.location.reload()
    }, 5000)
})
    