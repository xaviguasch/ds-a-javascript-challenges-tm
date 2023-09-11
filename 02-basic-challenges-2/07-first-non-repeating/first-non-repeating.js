function findFirstNonRepeatingCharacter(str) {
  const splittedStr = str.split('')

  const charCount = {}

  for (const char of splittedStr) {
    charCount[char] = (charCount[char] || 0) + 1
  }

  for (const char of splittedStr) {
    if (charCount[char] === 1) {
      return char
    }
  }

  return null
}

module.exports = findFirstNonRepeatingCharacter
