import {userstate, Setregister}from "../Controllers/conecction.js"

const capturar = document.getElementById('btnsave')

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

window.addEventListener('DOMContentLoaded',()=>{
    capturar.addEventListener('click',guardar)
})