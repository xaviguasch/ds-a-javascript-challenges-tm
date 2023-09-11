function validAnagrams(word1, word2) {
  const splitWord1 = word1.split('')
  const splitWord2 = word2.split('')

  const hashObj1 = {}
  const hashObj2 = {}

  splitWord1.forEach((letter) =>
    hashObj1[letter] ? (hashObj1[letter] += 1) : (hashObj1[letter] = 1)
  )

  splitWord2.forEach((letter) =>
    hashObj2[letter] ? (hashObj2[letter] += 1) : (hashObj2[letter] = 1)
  )

  for (const key in hashObj1) {
    if (hashObj1[key] !== hashObj2[key]) {
      return false
    }
  }

  return true
}

module.exports = validAnagrams
