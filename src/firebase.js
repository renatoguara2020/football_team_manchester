import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {cityDb} from './temp/m-city-export'


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
 

const DB = firebase.firestore();
const matchesCollection = DB.collection('matches');
const playersCollection = DB.collection('players');
const positionsCollection = DB.collection('positions');
const promotionsCollection = DB.collection('promotions');
const teamsCollection = DB.collection('teams');

cityDb.matches.forEach(item => {
  matchesCollection.add(item)
});

cityDb.players.forEach(item => {
  playersCollection.add(item)
});

cityDb.positions.forEach(item => {
  positionsCollection.add(item)
});

cityDb.promotions.forEach(item => {
  promotionsCollection.add(item)
});

cityDb.teams.forEach(item => {
  teamsCollection.add(item)
});



export {
    firebase,
    matchesCollection,
    playersCollection,
    positionsCollection,
    promotionsCollection,
    teamsCollection
}