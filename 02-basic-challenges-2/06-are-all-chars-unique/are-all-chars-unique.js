function areAllCharactersUnique(str) {
  const splittedStr = str.split('')

  const hashObj = {}

  let isItUnique = true

  splittedStr.forEach((char) => {
    if (!hashObj[char]) {
      hashObj[char] = 1
    } else {
      isItUnique = false
    }
  })

  return isItUnique
}

module.exports = areAllCharactersUnique
