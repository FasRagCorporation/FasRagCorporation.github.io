// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHxn_4dsWbavPcL0bhbI-5H8bHV9S0nCw",
  authDomain: "fasragcorporation.firebaseapp.com",
  projectId: "fasragcorporation",
  storageBucket: "fasragcorporation.appspot.com",
  messagingSenderId: "165378532775",
  appId: "1:165378532775:web:d20a808d16036c57174282",
  measurementId: "G-D3579MF62J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const saveComment = (nombre, email, coment) => 
  addDoc(collection(db, 'comentarios'),{nombre,email,coment});

export const getCommet = ()=> getDocs(collection(db, 'comentarios'));
 

export const onGetSnapshot = (callback) => onSnapshot(collection(db,'comentarios'), callback) 