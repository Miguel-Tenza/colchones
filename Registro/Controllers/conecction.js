import { 
    initializeApp 
  }  from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
  
  import { 
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    sendEmailVerification    
  }  from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js'

  import { 
    getFirestore,
    collection, 
    addDoc,
    getDocs,
    setDoc,
    getDoc,
    doc
  }  from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'


import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL
  } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js';

  
  const firebaseConfig = {
  apiKey: "AIzaSyDYarhGcxdLmmp5NfZwQ1wGcHG34r3mJys",
  authDomain: "proyecto1-674fd.firebaseapp.com",
  projectId: "proyecto1-674fd",
  storageBucket: "proyecto1-674fd.appspot.com",
  messagingSenderId: "818888895243",
  appId: "1:818888895243:web:eccc5ef84647ce5020500e",
  measurementId: "G-1WX5XZJRH6"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage();
  
  //metodo de autenticacion de usuario
  export const accessuser=(email,password)=>
    signInWithEmailAndPassword(auth, email, password)
  
  //Verificación de logeo
  export function userstate(){
    onAuthStateChanged(auth, (user) => {
      if (user) { 
        const uid = user.uid;
        console.log("usuario: "+uid)
      } else {
        window.location.href="../index.html"
      }
    });
  }
  
  //Cerrar sesión
  export const logout=()=>signOut(auth)

  //registrar usuario nuevo
  export const createuser=(email, password)=>
    createUserWithEmailAndPassword(auth, email, password)
  
  //Email de verificacion
  export const everification=()=>
    sendEmailVerification(auth.currentUser)

//agregar datos
export const Addproducto=(codigo,nombre,descripcion,cantidad)=>
  addDoc(collection(db, "productos"), {
    codigo,
    nombre,
    descripcion,
    cantidad
  });

//mostrar productos
export const viewproducts=()=>
  getDocs(collection(db, "productos"));

//agregar datos con id y URL de imagen
export const save_url=(codigo,name,country,urlcountry)=>
setDoc(doc(db, "estados", codigo), {
codigo,
name,
country,
urlcountry
});

//Leer registro especifico
export const Search_register=(codigo)=>
getDoc(doc(db, "estados", codigo))

//Unidad de almacenamiento storage
export const archivoimg = async (file, referencia)=>{
const storageref=ref(storage,`Paisimg/${referencia+file.name}`)
await uploadBytes(storageref, file);
const url = await getDownloadURL(storageref);
return url;
};