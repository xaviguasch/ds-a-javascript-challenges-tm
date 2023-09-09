function titleCase(orStr) {
  const splittedStr = orStr.split(' ')

  return splittedStr
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

module.exports = titleCase
