let popost = document.querySelector('.popup-post')
let post = document.querySelector( '.button-post')

let pop = document.querySelector('.popup-post')
let buttonPost = document.querySelector('.button-post')

post.addEventListener('click',() => {
    popost.style.opacity = '1'
    popost.style.zIndex = '999'
    popost.style.transition ='0.4s'
})

pop.addEventListener('click', (event)=>{
    if (event.target.className  == 'popup-post'){
       return pop.style.display ='none'
    }
})

buttonPost.addEventListener('click', ()=>{
    if (pop.style.display == 'none'){
        return pop.style.display ='flex'
    }
})