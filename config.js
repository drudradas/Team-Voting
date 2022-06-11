import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {

    apiKey: "AIzaSyBmylE7dTzAL46Ql-4Fh9fqkdHBKbFsHrY",
    authDomain: "aadsadsadsads-508e5.firebaseapp.com",
    projectId: "aadsadsadsads-508e5",
    storageBucket: "aadsadsadsads-508e5.appspot.com",
    messagingSenderId: "278581976532",
    appId: "1:278581976532:web:5ca425c4b534a909564a41"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
