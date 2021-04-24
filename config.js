import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyBpxcDgEguZ7oeqEEI-IS8PF6xKpwrY05E",
    authDomain: "teamvotingapp.firebaseapp.com",
    databaseURL: "https://teamvotingapp-default-rtdb.firebaseio.com",
    projectId: "teamvotingapp",
    storageBucket: "teamvotingapp.appspot.com",
    messagingSenderId: "990395711535",
    appId: "1:990395711535:web:e2dac63cea3c596561c6da"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();