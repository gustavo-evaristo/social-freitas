let first = document.querySelector('#first')

let second = document.querySelector('#second')

let third = document.querySelector('#third')

let fourth = document.querySelector('#fourth')

let inputImg = document.querySelector('input[type=hidden]')

second.addEventListener('click', () => {
    first.src = '/uploads/back1.jpg'
    inputImg.value = 'back1.jpg'
})

third.addEventListener('click', () => {
    first.src = '/uploads/back2.jpg'
    inputImg.value = 'back2.jpg'
})

fourth.addEventListener('click', () => {
    first.src = '/uploads/back3.jpg'
    inputImg.value = 'back3.jpg'
})