function findMissingLetter(arr) {
  if (arr.length === 0) return ''

  const lowerCaseArr = arr.map((letter) => letter.toLowerCase())

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

  const idxOf1stLetter = alphabet.indexOf(lowerCaseArr[0])

  let missingLetter = ''

  for (let i = idxOf1stLetter; i < idxOf1stLetter + lowerCaseArr.length; i++) {
    if (!lowerCaseArr.includes(alphabet[i])) {
      missingLetter = alphabet[i]
    }
  }

  // returns the letter to its original format, if necessary
  if (arr[0] === arr[0].toUpperCase()) {
    return missingLetter.toUpperCase()
  } else {
    return missingLetter
  }
}

module.exports = findMissingLetter
