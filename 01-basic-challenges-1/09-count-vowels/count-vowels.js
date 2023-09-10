function countVowels(str) {
  const splittedStr = str.toLowerCase().split('')
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let vowelCount = 0

  splittedStr.forEach((w) => {
    // if (vowels.includes(w)) {
    //   vowelCount++
    // }

    // ALTERNATIVE SOLUTION
    if (vowels.indexOf(w) !== -1) {
      vowelCount++
    }
  })

  return vowelCount
}

module.exports = countVowels
