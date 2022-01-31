import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyA7kbulRbZVj0gBhDeIjo9AhO71Ky0rzJc",
    authDomain: "team-voting-109ea.firebaseapp.com",
    projectId: "team-voting-109ea",
    storageBucket: "team-voting-109ea.appspot.com",
    messagingSenderId: "527597580414",
    appId: "1:527597580414:web:9d886b342d28973cbea82f"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();