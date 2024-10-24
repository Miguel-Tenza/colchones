import {userstate, Addproducto}from "../conecction.js/"
userstate()
const save = document.getElementById('btnregister')
async function registrar(){ 
    const cod = document.getElementById('edtcodigo').value; 
    const name = document.getElementById('edtname').value; 
    const desc = document.getElementById('edtdesc').value; 
    const cant = document.getElementById('edtcantidad').value; 
 
    if (!cod || !name || !desc || !cant) { 
        alert("Todos los campos son obligatorios."); 
        return; 
    } 
 
    try { 
        const validar = await Addproducto(cod,name,desc,cant); 
        alert('El producto se registró exitosamente.'); 
        window.location.href = "../Templates/regproductos.html"; 
    } catch (error) { 
        alert('Registro fallido. Inténtalo nuevamente.'); 
        console.error("Error al registrar el producto: ", error); 
    } 
}

window.addEventListener('DOMContentLoaded',()=>{
    save.addEventListener('click',registrar)
})