const listaRegistros = []
const container = document.querySelector('.container')
const containerlogado = document.querySelector('.containerLogado')
const loginBox = document.querySelector('.loginbox')
const registerBox = document.querySelector('.registerbox')
const btlogar = document.querySelector('.logar').addEventListener('click',verificaLogin)
const btregister = document.querySelector('.register').addEventListener('click',verificaCampos)
const btsignout = document.querySelector('.signout').addEventListener('click',signout)
const cpname = document.querySelector('#name')
const cpemail = document.querySelector('#email')
const cppassword = document.querySelector('#password')
const msgcontador = document.querySelector('.msgContador')
const marea = document.querySelector('.marea')
const msglogin = document.querySelector('.msglogin')
const namelogin = document.querySelector('#namelogin')
const passwordlogin = document.querySelector('#passwordlogin')
const infouser = document.querySelector('.infouser')
const logouser = document.querySelector('.logouser')
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
        return
    }
    if(!validaEmail()){
        let msg= 'Insira um email válido'
        showError(cpemail,msg)
        return
    }
    if( cppassword.value.length < 3){
        let msg ='Senha: min 03 caracteres'
        showError(cppassword,msg)
        return
    }
    if(verificaLista()){
        let msg='Email já cadastrado'
        showError(cpemail,msg)
        return
    }
    const user = userConstructor(cpname.value,cpemail.value,cppassword.value)
    listaRegistros.push(user)
    showContador()
    limpaCampos()
    showAccept()
 }

 function verificaLogin(){

     let user = listaRegistros.find((i)=> {
         return i.email == namelogin.value && i.password == passwordlogin.value 
     })
     console.log(user)
     if(user){
        logarUsuario(user)
        limpaCampos()
     }else{
         errorUsuario()
         limpaCampos()
     }
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
    marea.style.color ='red'
    input.value = ''
    setTimeout(()=>{
        input.style.borderColor='black'
        marea.innerHTML= ''
    },2000)
 }
 function showAccept(){
     marea.innerHTML= "Usuário Cadastrado com Sucesso"
     marea.style.color='green'
     setTimeout(()=>{
        marea.innerHTML= ''
    },2000)
 }
 function validaEmail(){
     const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
     if (emailRegex.test(cpemail.value)){
         return true
     }return false
 }
 function verificaLista(){
    let has = listaRegistros.find((i)=>{
        return i.email === cpemail.value
    })
    return has
 }
 function limpaCampos(){
     cpemail.value = ''
     cppassword.value = ''
     cpname.value = ''
     namelogin.value = ''
     passwordlogin.value = ''
  }
 function logarUsuario(user){
    container.style.display = 'none'
    containerlogado.style.display ='flex'
    infouser.innerHTML = `<p>Nome: ${user.name}</p><p>Email: ${user.email}</p><p>Senha: ${user.password}</p>`
    logouser.innerHTML = `<p>${user.name}</p>`
 }
 function signout(){
    containerlogado.style.display ='none'
    container.style.display = 'flex'
    logouser.innerHTML = `<p>Não Logado</p>`
 }
 function errorUsuario(){
    msglogin.innerHTML='Email ou Senha Incorretos!'
    msglogin.style.color='red'
    setTimeout(() => {
        msglogin.innerHTML=''
    }, 2000);
 }