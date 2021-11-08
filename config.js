import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
        apiKey: "AIzaSyAMKzakTT_sw2LiDL-wmCdYLGaAcUeTuIA",
        authDomain: "c-67-cf708.firebaseapp.com",
        databaseURL: "https://c-67-cf708-default-rtdb.firebaseio.com",
        projectId: "c-67-cf708",
        storageBucket: "c-67-cf708.appspot.com",
        messagingSenderId: "762277341421",
        appId: "1:762277341421:web:4a4e52247afa8451cd44e4"
      };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();