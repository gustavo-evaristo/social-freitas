let eye = document.querySelectorAll('.eye')
let input = document.querySelectorAll('.password')
let iconEye = document.querySelectorAll('.eye i')

for(let i = 0; i < input.length; i++){
    eye[i].addEventListener('mousedown', () => {
        input[i].type = 'text'
        iconEye[i].className = ''
        iconEye[i].className = 'far fa-eye'
    })
}
for(let i = 0; i < input.length; i++){
    eye[i].addEventListener('mouseup', () => {
        input[i].type = 'password'
        iconEye[i].className = ''
        iconEye[i].className = 'far fa-eye-slash'
    })
}

for(let i = 0; i < input.length; i++){
    eye[i].addEventListener('mousemove', () => {
    input[i].type = 'password'
    iconEye[i].className = ''
    iconEye[i].className = 'far fa-eye-slash'
})
}

