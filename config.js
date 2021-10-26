import firebase from 'firebase';

// add SDK Firebase
// var firebaseConfig = {

// };

const firebaseConfig = {
  apiKey: "AIzaSyAJpD2t_llXPE-wFz3ptxUutRAuwvJLwVM",
  authDomain: "team-voting-71246.firebaseapp.com",
  databaseURL: "https://team-voting-71246-default-rtdb.firebaseio.com",
  projectId: "team-voting-71246",
  storageBucket: "team-voting-71246.appspot.com",
  messagingSenderId: "651167380918",
  appId: "1:651167380918:web:f70d288c3b7e381b4b3d17"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
