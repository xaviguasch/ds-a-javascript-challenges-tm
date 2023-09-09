function countOccurrences(string, char) {
  const wordArr = string.split('')

  let count = 0

  wordArr.forEach((w) => {
    if (w === char) {
      count++
    }
  })

  return count
}

module.exports = countOccurrences
