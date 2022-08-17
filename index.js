/* To Do

Need a way to establish that:
    rock beats scissors 
    scissors beats paper
    paper beats rock
    might could just declare win conditions
Find a way to see what the player chose: 
    might do something other than prompt, 
    such as an input or form since I have used that before
Create comparisons:
    one for when the player & computer choose the same
    one for player winner 
    one for comp winner 

*/
let options = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors'
}

// returns a random choice from the 3 options in RPS
const getComputerChoice = (obj) => {
    const choice = Object.keys(obj)
    return choice[Math.floor(Math.random() * choice.length)]
}
console.log(getComputerChoice(options))

const getPlayerChoice = () => {
    let playerChoice = prompt('Enter your choice of rock, paper, or scissors: ')
    playerChoice.toLowerCase()
    return playerChoice
}
getPlayerChoice()

// probably gonna need several conditionals for this 
// cant decide if I should do switch & case or if else statements
const round = (compSelection, playerSelection) =>{
    let compChoice = getComputerChoice(options)
    let playerChoice = getPlayerChoice()
    
}




switch(choice) {
    case draw:
        console.log('draw game');
        break
    case loser: 
        console.log('computer wins :/')
        break
    case winner:
        console.log('you win!')
}