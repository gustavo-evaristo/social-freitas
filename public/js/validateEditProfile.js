function ValidateEditProfile() {

  /* SPAN */
  let invalidName = document.querySelector('#invalidName')
  let invalidLogin = document.querySelector('#invalidLogin')
  let invalidPassword = document.querySelector('#invalidPassword')
  let invalidConfirm = document.querySelector('#invalidConfirm')
  let invalidActivePassword = document.querySelector('#invalidActivePassword')

  /* INPUTS */

  let nameUser = document.querySelector('#name_user').value
  let userUser = document.querySelector('#user_user').value
  let passUser = document.querySelector('#pass_user').value
  let passuserConfirm = document.querySelector('#pass_userConfirm').value
  let pass_active = document.querySelector('#pass_active').value


  if (pass_active.length < 6) {
    invalidActivePassword.style.display = 'flex'
    return false
  } else {
    invalidActivePassword.style.display = 'none'

  }

  if (nameUser.length < 10 || nameUser.length > 25) {
    invalidName.style.display = 'flex'
    return false
  } else {
    invalidName.style.display = 'none'
  }

  if (userUser.length < 7 || userUser.length > 15) {
    invalidLogin.style.display = 'flex'
    return false
  } else {
    invalidLogin.style.display = 'none'

  }

  if (passUser.length < 6) {
    invalidPassword.style.display = 'flex'
    return false
  } else {
    invalidPassword.style.display = 'none'

  }

  if (passuserConfirm.length < 6 || passuserConfirm != passUser) {
    invalidConfirm.style.display = 'flex'
    return false
  } else {
    invalidConfirm.style.display = 'none'

  }

  return true
}