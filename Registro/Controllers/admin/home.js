import {logout, userstate}from "../../Controllers/conecction.js"
userstate()
const cerrar = document.getElementById('btnlogout')

async function sesion() {
    try {
        await logout();
        alert('Sesión cerrada');
        window.location.href = "../../index.html";
    } catch (error) {
        alert('Error al cerrar sesión: ' + error.message);
        console.error('Error al cerrar sesión:', error);
    }
}

window.addEventListener('DOMContentLoaded',async()=>{
    cerrar.addEventListener('click', sesion)
})