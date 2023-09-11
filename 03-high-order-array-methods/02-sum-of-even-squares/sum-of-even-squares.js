function sumOfEvenSquares(arr) {
  return arr
    .filter((num) => num % 2 === 0)
    .map((num) => Math.pow(num, 2))
    .reduce((acc, currV) => acc + currV, 0)
}

module.exports = sumOfEvenSquares
