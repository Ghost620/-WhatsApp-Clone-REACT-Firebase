import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDdjhgsMeu_ToSKLsbVgGlwFZOxyg-uRAA",
    authDomain: "whatsapp-react-e4240.firebaseapp.com",
    projectId: "whatsapp-react-e4240",
    storageBucket: "whatsapp-react-e4240.appspot.com",
    messagingSenderId: "873295405489",
    appId: "1:873295405489:web:9bca8fb8eed6feb0761d90",
    measurementId: "G-B8V6FNBM15"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;