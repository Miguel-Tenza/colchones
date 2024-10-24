import{Setregister,Getregister} from "../conecction.js"

const save = document.getElementById('btnsave')
const buscar = document.getElementById('btnbuscar')
const imprimir = document.getElementById('cont')

async function guardar(){
    const cod=document.getElementById('edtcod').value
    const nombre=document.getElementById('edtname').value
    const país=document.getElementById('edtpais').value

    if (!cod || !cod || !nombre || !país) { 
        alert("Todos los campos son obligatorios."); 
        return; 
    } 
    try {
        const verificar = await Setregister(cod,nombre,país)
        alert('Registro exitoso')
        window.location.href='regcity.html'

    } catch (error) {
        // Manejo de errores en el registro
        console.error('Error al registrar:', error);

        // Mensajes de error personalizados según el tipo de error (si está disponible)
        if (error.message.includes('already exists')) {
            alert('El código ya está registrado.');
        } else {
            alert('Error al registrar. Inténtalo de nuevo.');
        }
    }
}

async function Ver(){
    const cod=document.getElementById('edtcod').value

    try {
        const esperar = Getregister(cod)
        const docSnap = await esperar
        
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            let Html=""
            Html=`
                <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${docSnap.data().name}</h5>
                    <p class="card-text">${docSnap.data().codigo}</p>
                    <p class="card-text">${docSnap.data().country}</p>
                    <a href="#" class="btn btn-primary">Delete</a>
                    <a href="#" class="btn btn-primary">Update</a>
                </div>
                </div>
            `
            imprimir.innerHTML=Html
        } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
        }
    } catch (error) {
        console('error',error)
    }  
}


window.addEventListener('DOMContentLoaded', async()=>{
    save.addEventListener('click',guardar)
    buscar.addEventListener('click',Ver)
})