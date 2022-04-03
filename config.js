import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD4sJ3APtjggFl7lDa-IvWa8ocg90awHG0",
    authDomain: "project-58-d6eed.firebaseapp.com",
    databaseURL: "https://project-58-d6eed-default-rtdb.firebaseio.com",
    projectId: "project-58-d6eed",
    storageBucket: "project-58-d6eed.appspot.com",
    messagingSenderId: "267951069841",
    appId: "1:267951069841:web:134e8e4f53d6d84bcafd30"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();