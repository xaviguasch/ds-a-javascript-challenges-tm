function reverseString(str) {
  if (str === '') {
    return ''
  }

  const lastChar = str.substr(-1)
  const restOfStr = str.substr(0, str.length - 1)

  return lastChar + reverseString(restOfStr)
}

module.exports = reverseString
