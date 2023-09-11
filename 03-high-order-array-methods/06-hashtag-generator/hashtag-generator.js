function generateHashtag(str) {
  if (str.length === 0 || str.length > 140) {
    return false
  }

  let hashtagStr = '#'

  const trimmedStr = str.trim()
  const splitStr = trimmedStr.split(' ')

  const arrWithoutEmptySlots = splitStr.filter((w) => w.length >= 1)

  arrWithoutEmptySlots.forEach((word) => {
    hashtagStr += word[0].toUpperCase() + word.slice(1).toLowerCase()
  })

  return hashtagStr
}

module.exports = generateHashtag
