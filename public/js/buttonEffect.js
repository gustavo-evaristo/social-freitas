function buttonEffect(){
    let btn = document.querySelectorAll('input#button')
    let i = 0
    while (i < btn.length){
        btn[i].style.transition = '0.6s'
        i++
    }
}