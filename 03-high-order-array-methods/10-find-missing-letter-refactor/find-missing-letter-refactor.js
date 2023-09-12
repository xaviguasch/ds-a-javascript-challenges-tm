function findMissingLetter(arr) {
  const startingCharCode = arr[0].charCodeAt(0)

  const charCodesArr = arr.map((char) => char.charCodeAt(0))

  const prevToMissingCharCode = charCodesArr.find(
    (cc, idx) => cc + 1 !== charCodesArr[idx + 1]
  )

  return String.fromCharCode(prevToMissingCharCode + 1)
}

module.exports = findMissingLetter
