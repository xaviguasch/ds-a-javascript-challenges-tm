function removeDuplicates(arr) {
  const noDupArr = []

  arr.forEach((el) => {
    if (!noDupArr.includes(el)) {
      noDupArr.push(el)
    }
  })

  return noDupArr
}

module.exports = removeDuplicates
