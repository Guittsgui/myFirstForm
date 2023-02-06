const listaRegistros = []
const container = document.querySelector('.container')
const loginBox = document.querySelector('.loginbox')
const registerBox = document.querySelector('.registerbox')
const btlogar = document.querySelector('.logar')
const btregister = document.querySelector('.register').addEventListener('click',verificaCampos)
const cpname = document.querySelector('#name')
const cpemail = document.querySelector('#email')
const cppassword = document.querySelector('#password')
const msgcontador = document.querySelector('.msgContador')
const marea = document.querySelector('.marea')
const pgLogin = document.querySelector('.pgLogin').addEventListener('click',()=>{
   loginBox.style.display='none'
   registerBox.style.display='flex'
})
const pgRegister = document.querySelector('.pgRegister').addEventListener('click',()=>{
    registerBox.style.display='none'
    loginBox.style.display='flex'
})

 showContador()


 function verificaCampos(e){
    e.preventDefault()
    console.log(cpname)

    if ( cpname.value.length < 3){
        let msg = 'Nome: min 03 caracteres'
        showError(cpname,msg)
    }

    if(cpemail){
    }

    if( cppassword < 3){
    }
    // verifica email usuário lista
    // cria usuário
    // adiciona na lista
    // atualiza msg lá encima.

 }

 class User{
     constructor(name,email,password){
         this.name = name
         this.email = email
         this.password = password
     }
 }

 function userConstructor(name,email,password){
     const u = new User(name,email,password)
     return u
 }
 function showContador(){
     msgcontador.innerHTML= `${listaRegistros.length}`
 }
 function showError(input,msg){
    input.style.borderColor='red'
    marea.innerHTML= `${msg}`
    setTimeout(()=>{
        input.style.borderColor='black'
        marea.innerHTML= ''
    },2000)
 }