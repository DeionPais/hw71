import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyARiK7RAGnjZbcXY_8vVRQe0fZvXXoKjxw",
    authDomain: "e-ride-43d56.firebaseapp.com",
    projectId: "e-ride-43d56",
    storageBucket: "e-ride-43d56.appspot.com",
    messagingSenderId: "375419866678",
    appId: "1:375419866678:web:95d327f669c590c00b9297"
  };
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
