function validateForm(){
    let name = document.querySelector('span#name')
    let inputName = document.querySelector('input#name').value
    let login = document.querySelector('span#login')
    let inputLogin = document.querySelector('input#login').value
    let genre = document.querySelector('span#genre')
    let selectGenre = document.querySelector('select#genre').value
    let sector = document.querySelector('span#sector')
    let selectSector = document.querySelector('select#sector').value
    let password = document.querySelector('span#password')
    let inputPassword = document.querySelector('input#password').value
    let passwordConfirm = document.querySelector('span#passwordConfirm')
    let inputPasswordConfirm = document.querySelector('input#passwordConfirm').value


    if (inputName.length <= 6) {
        name.style.display = 'flex'
        return false
    } else {
        name.style.display = 'none'
    }
    
    if (inputLogin.length <= 6) {
        login.style.display = 'flex'
        return false
    } else {
        login.style.display = 'none'
    }

    if (selectGenre == '0') {
        genre.style.display = 'flex'
        return false
    } else {
        genre.style.display = 'none'
    }

    if (selectSector == '0') {
        sector.style.display = 'flex'
        return false
    } else {
        sector.style.display = 'none'
    }

    if (inputPassword.length <= 6) {
        password.style.display = 'flex'
        return false
    } else {
        password.style.display = 'none'
    }

    if (inputPassword != inputPasswordConfirm) {
        passwordConfirm.style.display = 'flex'
        return false
    } else {
        passwordConfirm.style.display = 'none'
    }

    return validation
}