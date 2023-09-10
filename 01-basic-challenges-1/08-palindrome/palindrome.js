function isPalindrome(str) {
  const trimmedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
  const reversedStr = trimmedStr.split('').reverse().join('')

  return reversedStr === trimmedStr
}

module.exports = isPalindrome
