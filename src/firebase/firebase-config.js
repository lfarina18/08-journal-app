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

const firebaseConfigTesting = {
  apiKey: "AIzaSyA9g9YuQ3_H9tdZO3Akbhcw0nytMgsydS8",
  authDomain: "tests-df54e.firebaseapp.com",
  projectId: "tests-df54e",
  storageBucket: "tests-df54e.appspot.com",
  messagingSenderId: "426967218723",
  appId: "1:426967218723:web:a4c0b51eba0072e3d5cf96"
};

if(process.env.NODE_ENV === "test") {
  // testing 
  firebase.initializeApp(firebaseConfigTesting);

} else {
  //dev/prod
  firebase.initializeApp(firebaseConfig);
}


const db = firebase.firestore();
 
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
 
export{
    db,
    googleAuthProvider,
    firebase
}