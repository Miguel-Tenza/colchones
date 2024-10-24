import {viewproducts,userstate}from "../Controllers/conecction.js"
userstate()
const ver = document.getElementById('vdata'); 

async function cargar() {
    ver.innerHTML = ''; 
    try {
        const querySnapshot = await viewproducts(); 

        if (querySnapshot.empty) {
            ver.innerHTML = '<tr><td colspan="5">No hay productos registrados</td></tr>';
            return;
        }

        querySnapshot.forEach((doc) => {
            const product = doc.data(); 
            ver.innerHTML += `
                <tr>
                    <th scope="row">${doc.id}</th>
                    <td>${product.codigo}</td>
                    <td>${product.nombre}</td>
                    <td>${product.descripcion}</td>
                    <td>${product.cantidad}</td>
                </tr>
            `;
        });
    } catch (error) {
        console.error("Error al cargar productos:", error);
        ver.innerHTML = '<tr><td colspan="5">Error al cargar productos</td></tr>';
    }
}

window.addEventListener('DOMContentLoaded', cargar);
