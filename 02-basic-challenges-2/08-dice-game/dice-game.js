function rollDice() {
  const randomNum = Math.floor(Math.random() * 6) + 1

  return randomNum
}

function calculateResult(sum) {
  if (sum === 7 || sum === 11) {
    return 'win'
  } else if (sum === 2 || sum === 3 || sum === 12) {
    return 'lose'
  } else {
    return 'roll again'
  }
}

function diceGameSimulation(numSimul) {
  const resultsArr = []

  for (let i = 0; i < numSimul; i++) {
    const dice1 = rollDice()

    const dice2 = rollDice()

    const sum = dice1 + dice2

    const newSimul = {
      dice1,
      dice2,
      sum,
      result: calculateResult(sum),
    }

    resultsArr.push(newSimul)
  }

  return resultsArr
}

module.exports = diceGameSimulation
