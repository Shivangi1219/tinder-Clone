import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCGLG3GgA7cpDOUZnMzxLY8d6F3Rs8SIXU",
    authDomain: "tinder-clone-f89a4.firebaseapp.com",
    projectId: "tinder-clone-f89a4",
    storageBucket: "tinder-clone-f89a4.appspot.com",
    messagingSenderId: "969337529356",
    appId: "1:969337529356:web:cb32c74159ee29a13b3a29"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

 export  default database;