const listaRegistros = []
const container = document.querySelector('.container')
const loginBox = document.querySelector('.loginbox')
const registerBox = document.querySelector('.registerbox')
const pgLogin = document.querySelector('.pgLogin').addEventListener('click',()=>{
   loginBox.style.display='none'
   registerBox.style.display='flex'
})
const pgRegister = document.querySelector('.pgRegister').addEventListener('click',()=>{
    registerBox.style.display='none'
    loginBox.style.display='flex'
})
