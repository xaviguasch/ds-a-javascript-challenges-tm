function findMissingNumber(arr) {
  if (arr.length === 0) return 1

  const n = arr.length + 1

  const sumOfNums = (n * (n + 1)) / 2 // same as adding 1 + 2 + 3... to 10

  const sumOfArrNums = arr.reduce((acc, currV) => acc + currV, 0)

  return sumOfNums - sumOfArrNums
}

module.exports = findMissingNumber
