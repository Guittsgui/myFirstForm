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
const btSubtmit = document.querySelector('#btRegistra').addEventListener('click', clicou)

function clicou(e){
    e.preventDefault()

        if(nome.value.length < 3){
            const msg = 'Mínimo de 03 Caracteres'
            showErrorMsg(nome,msg)
            return
        }
        if(email.value === ''){
            const msg = "Problemas Email"
            showErrorMsg(email,msg)
            return
        }
        if(password.value ===''){
            const msg= "Problemas Senha"
            showErrorMsg(email,msg)
            return
        }
        
     
    }



function showErrorMsg(){
    
}

