function reverseString(str) {
  // with built-in methods
  // return str.split('').reverse().join('')

  let reversedStr = ''

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i]
  }

  return reversedStr
}

module.exports = reverseString
