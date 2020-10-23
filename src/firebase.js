import * as firebase from "firebase/app";

import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAD_20rjb3uewP4qqXurPJ03cpTbC0a9kc",
    authDomain: "messenger-72b26.firebaseapp.com",
    databaseURL: "https://messenger-72b26.firebaseio.com",
    projectId: "messenger-72b26",
    storageBucket: "messenger-72b26.appspot.com",
    messagingSenderId: "652118825568",
    appId: "1:652118825568:web:56ccba24a5ae0d323d4105"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { db,timestamp };