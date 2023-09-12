function validatePassword(password) {
  if (password.length < 8) {
    return false
  }

  const splitPass = password.split('')
  const nums = []
  const letters = []

  splitPass.forEach((char) => {
    const charToNum = Number(char)

    const charStr = charToNum.toString()

    if (char === charStr) {
      nums.push(char)
    } else {
      letters.push(char)
    }
  })

  const checkForUpperCase = letters.some((char) => {
    const upperCasedChar = char.toUpperCase()

    if (char === upperCasedChar) {
      return true
    }
  })

  const checkForLowerCase = letters.some((char) => {
    const lowerCasedChar = char.toLowerCase()

    if (char === lowerCasedChar) {
      return true
    }
  })

  return nums.length > 0 && checkForLowerCase && checkForUpperCase
}

module.exports = validatePassword
