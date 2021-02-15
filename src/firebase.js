

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAvJ70IvVP1SnLHTztNKsrCgFg2izw52ew",
    authDomain: "get-done-fb9be.firebaseapp.com",
    projectId: "get-done-fb9be",
    storageBucket: "get-done-fb9be.appspot.com",
    messagingSenderId: "357073054384",
    appId: "1:357073054384:web:651929f5c7762184396975",
    measurementId: "G-DTPTY4HRET"
})

const database = firebaseApp.firestore();

export default database;