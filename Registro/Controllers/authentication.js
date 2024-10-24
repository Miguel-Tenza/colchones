import {accessuser}from "../Controllers/conecction.js"

const login = document.getElementById('btnlogin')

async function logear() {
    const email=document.getElementById('edtuser').value
    const password=document.getElementById('edtpsw').value

    try {
        const validar= await accessuser(email,password)
        const user=validar.user

        if(user.email==='admin@admin.com'){
            alert('Wellcome Administrator: '+email)
            console.log('Authentication successfull: '+email)
            window.location.href="/Templates/Admin/home.html"
        }else{
            alert('Wellcome Usuario: '+email)
            console.log('Authentication successfull: '+email)
            window.location.href="/Templates/Admin/home.html"
        }
      
    } catch (error) {
        alert('Error of Authentication: '+error.message)
        console.log('Error of Authentication: '+error)
    }
}

window.addEventListener('DOMContentLoaded',()=>{
    login.addEventListener('click',logear)
})