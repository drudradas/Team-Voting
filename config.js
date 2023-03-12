import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBJtzxsdwisuY_MmvatSKqEAAww2aRn4I4",
  authDomain: "c-37-quiz-game.firebaseapp.com",
  databaseURL: "https://c-37-quiz-game-default-rtdb.firebaseio.com",
  projectId: "c-37-quiz-game",
  storageBucket: "c-37-quiz-game.appspot.com",
  messagingSenderId: "434701679368",
  appId: "1:434701679368:web:1d2a247dd72e785b7acabd"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();