// SOLUTION WITH REGULAR EXPRESSION
// function validateEmail(email) {
//   const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

//   return emailRegex.test(email)
// }

function validateEmail(email) {
  if (email.indexOf('@') === -1) {
    return false
  }

  const [name, domain] = email.split('@')

  if (domain.indexOf('.') === -1) {
    return false
  }

  if (name.length === 0 || domain.length < 3) {
    return false
  }

  const [domainName, domainExt] = domain.split('.')

  if (domainName.length <= 1 && domainExt.length <= 1) {
    return false
  }

  return true
}

module.exports = validateEmail
