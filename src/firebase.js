import firebase from "firebase";

  const firebaseConfig = {
    apiKey: "AIzaSyCUtzV1zV28VrHqDhk8AX6Y0FooZy2Z828",
    authDomain: "clone-29e8f.firebaseapp.com",
    databaseURL: "https://clone-29e8f-default-rtdb.firebaseio.com",
    projectId: "clone-29e8f",
    storageBucket: "clone-29e8f.appspot.com",
    messagingSenderId: "369662499590",
    appId: "1:369662499590:web:a1913611f8925b102d1c87",
    measurementId: "G-V1M485S0MG"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };