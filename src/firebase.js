import firebase from 'firebase/app';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyA-LtBKeNdygPse8z3cm5gD-65JH8zs71Y",
    authDomain: "manchester-city-977ae.firebaseapp.com",
    projectId: "manchester-city-977ae",
    storageBucket: "manchester-city-977ae.appspot.com",
    messagingSenderId: "1024652574329",
    appId: "1:1024652574329:web:d6e43ade3ab08c880c9ea8",
    measurementId: "G-ED48Z5V5NN"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


export {
    firebase
}