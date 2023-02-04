const eye = document.querySelector('img').addEventListener('click',()=>{
    if(password.type == 'password'){
    password.setAttribute("type","text")
    }else{
        password.setAttribute("type","password")
    }
})
const form = document.querySelector('form')
const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const password = document.querySelector('#senha')
const msg = document.querySelector('.msg')
const greenMsg= document.querySelector('.greenMsg')
const btSubtmit = document.querySelector('#btRegistra').addEventListener('click', validaCampos)
const listaUsers = []

function validaCampos(e){
    e.preventDefault()
        if(nome.value.length < 3){
            const msg = 'Nome - min 03 caracteres'
            showErrorMsg(nome,msg)
            return
        }
        if(email.value === '' || !isEmailValid(email.value)){
            const msg = 'Insira um Email válido'
            showErrorMsg(email,msg)
            return
        }
        if(password.value.length < 3){
            const msg = 'Password - min 03 caracteres'
            showErrorMsg(password,msg)
            return
        }
        if(hasUser()){
            const msg = 'Email já Existente'
            showErrorMsg(email,msg)
            return     
        }

        const novoUsuario = constructUser(nome.value,email.value,password.value)
        listaUsers.push(novoUsuario)
        showCadastroMsg()
        limpaCampos()
        
    }

    function hasUser(e){
        if( listaUsers.length == 0){
            return false 
        } 
        // e ai josé?
    }


function isEmailValid(email){
    const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    if (emailRegex.test(email)){
        return true
    } return false
}
function showErrorMsg(input,mensagem){
    msg.innerHTML= mensagem
    msg.style.display='block'
    input.style.borderColor='red'
    setTimeout(()=>{
        msg.innerHTML=''
        input.style.borderColor='black'
    },2000)
}
function showCadastroMsg(){
    greenMsg.style.display ="block"
    setTimeout(()=>{
        greenMsg.style.display="none"
    },2000)
}
function limpaCampos(){
    nome.value = ''
    email.value = ''
    password.value = ''
}
class User{
    constructor(name,email,password){
        this.name=name
        this.email = email
        this.password = password
    }
}
function constructUser(name,email,password){
    const user = new User(name,email,password)
    return user
}
