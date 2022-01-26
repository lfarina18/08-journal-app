import  firebase  from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDAIcU22-gKnhFsaDmVWwOMpSe089dPFJo",
  authDomain: "react-app-cursos-c06eb.firebaseapp.com",
  projectId: "react-app-cursos-c06eb",
  storageBucket: "react-app-cursos-c06eb.appspot.com",
  messagingSenderId: "839345598323",
  appId: "1:839345598323:web:a1474ea194ce0fe85e1f06"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
 
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
 
export{
    db,
    googleAuthProvider,
    firebase
}