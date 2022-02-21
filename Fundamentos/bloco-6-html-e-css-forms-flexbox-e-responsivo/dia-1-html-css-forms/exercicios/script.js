let buttonSubmit = document.querySelector('button')
let inputImages = document.getElementById('input-imagens')
let inputs = document.querySelectorAll('.input')



function stopBehaviorButton(event){event.preventDefault()} 
buttonSubmit.addEventListener('click', stopBehaviorButton)


