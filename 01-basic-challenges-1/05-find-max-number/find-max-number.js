function findMaxNumber(numArr) {
  let maxNum = numArr[0]

  numArr.forEach((num) => {
    if (num > maxNum) {
      maxNum = num
    }
  })

  return maxNum
}

module.exports = findMaxNumber
