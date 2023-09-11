function highestScoringWord(str) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]

  const wordsArr = str.split(' ')

  const wordsByScores = wordsArr.map((word) =>
    word.split('').reduce((acc, currV) => acc + (alphabet.indexOf(currV) + 1), 0)
  )

  const biggestScore = wordsByScores.reduce((acc, currV) => {
    if (currV > acc) {
      acc = currV
    }

    return acc
  }, 0)

  return wordsArr[wordsByScores.indexOf(biggestScore)]
}

module.exports = highestScoringWord
