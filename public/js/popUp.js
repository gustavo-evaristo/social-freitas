let popup = document.querySelector('.popup');
let buttonpop = document.querySelector('#config-button')

let edit = document.querySelector('.edit')
let gear = document.querySelector('#config-gear')

let popost = document.querySelector('.popup-post')
let post = document.querySelector( '.button-post')


buttonpop.addEventListener('click',() => {
    popup.style.opacity = '1'
    popup.style.zIndex = '999'
    popup.style.transition ='0.4s'
})

gear.addEventListener('click',() => {
    edit.style.opacity = '1'
    edit.style.zIndex = '999'
    edit.style.transition ='0.4s'
})

post.addEventListener('click',() => {
    popost.style.opacity = '1'
    popost.style.zIndex = '999'
    popost.style.transition ='0.4s'
})
