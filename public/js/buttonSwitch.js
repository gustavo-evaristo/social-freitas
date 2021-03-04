let button = document.querySelector('#button-switch')

button.addEventListener('click', () => {
    if (button.value == '1') {
        return button.value = '0'
    } else {
        return button.value = '1'
    }
})