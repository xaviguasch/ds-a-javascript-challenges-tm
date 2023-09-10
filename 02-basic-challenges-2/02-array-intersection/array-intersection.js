function arrayIntersection(arr1, arr2) {
  const interArr = []

  arr1.forEach((num) => {
    if (arr2.includes(num)) {
      // we want to avoid duplicates in the final array so we check it first
      if (!interArr.includes(num)) {
        interArr.push(num)
      }
    }
  })

  return interArr
}

module.exports = arrayIntersection
