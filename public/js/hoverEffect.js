let div = document.querySelectorAll('.back-iten')

let icon = document.querySelectorAll('.back-iten i')

let icontext = document.querySelectorAll('.back-iten a')

let aUsers = document.querySelectorAll('.users-button button a')

let buttonUsers = document.querySelectorAll('.button-user')


for (let i = 0; i < div.length; i++) {
    div[i].addEventListener('mouseover', () => {
        icon[i].style.color = '#1D99E6'
        icon[i].style.transition = '0.4s'
        icontext[i].style.color = '#1D99E6'
        icontext[i].style.transition = '0.4s'
    })
}

for (let i = 0; i < div.length; i++) {
    div[i].addEventListener('mouseleave', () => {
        icon[i].style.color = '#FFF'
        icon[i].style.transition = '0.4s'
        icontext[i].style.color = '#FFF'
        icontext[i].style.transition = '0.4s'
    })
}

for (let i = 0; i < buttonUsers.length; i++) {
    buttonUsers[i].addEventListener('mouseover', () => {
        aUsers[i].style.color = '#FFF'
    })
}

for (let i = 0; i < buttonUsers.length; i++) {
    buttonUsers[i].addEventListener('mouseleave', () => {
        aUsers[i].style.color = '#1D99E6'
    })
} 