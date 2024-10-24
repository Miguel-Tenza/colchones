import{save_url, Search_register,archivoimg} from '../conecction.js'

const save = document.getElementById('btnsave')
const search = document.getElementById('btnsearch')
const imprimir = document.getElementById('cont')

async function guardar(){
    
const cod=document.getElementById('edtcod').value
const nombre=document.getElementById('edtname').value
const país=document.getElementById('edtpais').value

const avatar=document.getElementById('fileimg').files[0]
try {
let urlarchivo=''
if(avatar){
urlarchivo= await archivoimg(avatar,nombre)
}
const verificar = await save_url(cod,nombre,país,urlarchivo)
alert('Registro exitoso')
window.location.href='save_url.html'
} catch (e) {
console.error('error',e)
alert('Register failed')
}
}
async function Ver(){
const cod=document.getElementById('edtcod').value
try {
const esperar = Search_register(cod)
const docSnap = await esperar
if (docSnap.exists()) {
console.log("Document data:", docSnap.data());
let Html=""
Html=`
<div class="card" style="width: 18rem;">
<img src="${docSnap.data().urlcountry}" class="card-img-top" alt="...">
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
search.addEventListener('click',Ver)
})