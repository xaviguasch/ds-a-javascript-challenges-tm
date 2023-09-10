function displayLikes(peopleArr) {
  if (peopleArr.length === 0) {
    return 'no one likes this'
  } else if (peopleArr.length === 1) {
    return `${peopleArr[0]} likes this`
  } else if (peopleArr.length === 2) {
    return `${peopleArr[0]} and ${peopleArr[1]} like this`
  } else if (peopleArr.length === 3) {
    return `${peopleArr[0]}, ${peopleArr[1]} and ${peopleArr[2]} like this`
  } else {
    return `${peopleArr[0]}, ${peopleArr[1]} and ${peopleArr.length - 2} others like this`
  }
}

module.exports = displayLikes
