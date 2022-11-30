console.log('bro lo lograste  eres la verga');

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, onSnapshot} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYQJ_srpJoY1u7-nEOkO1yNzQIEhFaTNM",
  authDomain: "baconkingdon.firebaseapp.com",
  projectId: "baconkingdon",
  storageBucket: "baconkingdon.appspot.com",
  messagingSenderId: "550761256854",
  appId: "1:550761256854:web:a025a6fe3373c30fc3efb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
export const saveComment = (nombre, email, coment) => 
  addDoc(collection(db, 'comentarios'),{nombre,email,coment});

export const getCommet = ()=> getDocs(collection(db, 'comentarios'));

export const onGetSnapshot = (callback) => onSnapshot(collection(db,'comentarios'), callback)

