const passwordGenerator = (
  passwordLength,
  upperCaseLength,
  lowerCaseLength,
  symbolsLength,
  numbLength,
) => {
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  const symbols = "!@#$%^&*(){}|:?><,./';][=-_+~"
  const numb = '0123456789'
  let password = ''

  if (passwordLength <= 0) {
    return `<h1 style="margin-top:20%; text-align:center;">You must enter a password length greater than 0</h1>`
  }

  for (let i = 0; i < passwordLength; i++) {
    if (password.length < passwordLength) {
      if (
        upperCaseLength <= 0 ||
        lowerCaseLength <= 0 ||
        symbolsLength <= 0 ||
        numbLength <= 0
      ) {
        password += upperCase.charAt(Math.floor(Math.random() * 26))
        password += lowerCase.charAt(Math.floor(Math.random() * 26))
        password += numb.charAt(Math.floor(Math.random() * 10))
        password += symbols.charAt(Math.floor(Math.random() * 29))
      } else {
        if (i < upperCaseLength) {
          password += upperCase.charAt(Math.floor(Math.random() * 26))
        }
        if (i < lowerCaseLength) {
          password += lowerCase.charAt(Math.floor(Math.random() * 26))
        }
        if (i < numbLength) {
          password += numb.charAt(Math.floor(Math.random() * 10))
        }
        if (i < symbolsLength) {
          password += symbols.charAt(Math.floor(Math.random() * 29))
        }
      }
    }
  }
  return `<h1 style="margin-top:20%; text-align:center;">Your Generated Password Is: ${password}</h1>`
}

module.exports = passwordGenerator
