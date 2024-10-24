import {createuser, userstate, everification}from "../../Controllers/conecction.js"
userstate()

const guardar = document.getElementById('btnsave');

function validarPassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
}

async function registrarUsuario() {
    const email = document.getElementById('edtemail').value;
    const confirmEmail = document.getElementById('edtconfemail').value;
    const password = document.getElementById('edtpassword').value;
    const confirmPassword = document.getElementById('edtconf_password').value;

    if (!email || !confirmEmail || !password || !confirmPassword) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    if (email !== confirmEmail) {
        alert("Los correos electrónicos no coinciden.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    if (!validarPassword(password)) {
        alert("La contraseña debe tener al menos 8 caracteres, incluir una mayúscula, un número y un carácter especial.");
        return;
    }

    try {
        const userCredential = await createuser(email, password);
        await everification();
        alert('Usuario registrado exitosamente.');
        window.location.href = "../Admin/reguser.html";
    } catch (error) {
        alert("Error en el registro: " + error.message);
    }
}

window.addEventListener('DOMContentLoaded', async () => {
    guardar.addEventListener('click', registrarUsuario);
});
