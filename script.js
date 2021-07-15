let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  const randomNumber = Math.floor(Math.random()*10);
  return randomNumber;
}

const compareGuesses = (humanGuess, computerGuess, secretTargetGuess ) => {
  if (humanGuess === computerGuess) {
    return true;
  }else if (Math.abs(humanGuess-secretTargetGuess) < Math.abs(computerGuess - secretTargetGuess)) {
    return true;
  }else {
    return false;
   }
  }

  const updateScore = (winner) => {
    if (winner=== 'human') {
      humanScore+= 1;
    } else if (winner === 'computer'){
      computerScore+= 1;
    }
  }

  const advanceRound = () => currentRoundNumber+= 1;