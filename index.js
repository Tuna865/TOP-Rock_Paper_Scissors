let options = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors'
}

// returns a random choice from the 3 options in RPS
const getComputerChoice = (obj) => {
    const plays = Object.keys(obj)
    return plays[Math.floor(Math.random() * plays.length)]
}

// console.log(getComputerChoice(options))

// probably gonna need several conditionals for this 
const round = (compSelect, playerSelect) =>{
    
}