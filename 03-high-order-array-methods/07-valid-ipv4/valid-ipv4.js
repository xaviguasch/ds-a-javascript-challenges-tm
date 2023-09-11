const isValidIPv4 = (address) => {
  const octetsArr = address.split('.')

  if (octetsArr.length !== 4) {
    return false
  }
  // checks for leading zeros, if there's
  // one octet with one, whole thing is false
  if (octetsArr.some((octet) => /^0+/.test(octet))) {
    return false
  }

  let isValid = true

  octetsArr.forEach((oct) => {
    if (oct > 255 || oct < 0) {
      isValid = false
    }
  })

  console.log(octetsArr)

  return isValid
}

module.exports = isValidIPv4
