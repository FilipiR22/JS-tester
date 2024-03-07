let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let nome_visu = document.querySelector('#nome_visu')
let email_visu = document.querySelector('#email_visu')
let btn_enviar = document.querySelector('#btn_enviar')

btn_enviar.addEventListener('click',()=>{
    email_visu.innerHTML=email.value
    nome_visu.innerHTML=email.value
})