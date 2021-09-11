import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDauWXe2ZCk1L-cl7JBM-3qtuggzOvGIOI",
  authDomain: "classtest-34c16.firebaseapp.com",
  databaseURL: "https://classtest-34c16-default-rtdb.firebaseio.com",
  projectId: "classtest-34c16",
  storageBucket: "classtest-34c16.appspot.com",
  messagingSenderId: "657069474519",
  appId: "1:657069474519:web:da174c44d7e6656adb6692"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.database();
