// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDLgGi3rav5YOIipkzsvh2jsJZN-RMes_M",
    authDomain: "number1-a4395.firebaseapp.com",
    projectId: "number1-a4395",
    storageBucket: "number1-a4395.appspot.com",
    messagingSenderId: "614778953161",
    appId: "1:614778953161:web:4d6bb85b30715ba9f15c18",
    measurementId: "G-6WTHMWMS9N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;