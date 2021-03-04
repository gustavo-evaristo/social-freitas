let pop = document.querySelector('.popup-post')
let buttonPost = document.querySelector('.button-post')

let editC = document.querySelector('.edit')
let gearC = document.querySelector('#config-gear')

let popupPaper = document.querySelector('.popup');
let buttonpopPaper = document.querySelector('#config-button')

popupPaper.addEventListener('click', (event)=>{
    if (event.target.className  == 'popup'){
       return popupPaper.style.display ='none'
    }
})

buttonpopPaper.addEventListener('click', ()=>{
    if (popupPaper.style.display == 'none'){
        return popupPaper.style.display ='flex'
    }
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

editC.addEventListener('click', (event)=>{
    if(event.target.className == 'edit'){
        return editC.style.display = 'none'
    }
})

gearC.addEventListener('click', (event)=>{
    if(editC.style.display == 'none'){
        return editC.style.display ='flex'
    }
})


