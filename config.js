import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCZiTvZ1VL8ZG5m4pHNmRoVW5X8WATb9ww",
  authDomain: "health-check-6849b.firebaseapp.com",
  databaseURL: "https://health-check-6849b-default-rtdb.firebaseio.com",
  projectId: "health-check-6849b",
  storageBucket: "health-check-6849b.appspot.com",
  messagingSenderId: "1001224758706",
  appId: "1:1001224758706:web:ff52a63cfb86672ce430ab"
};

 // Initialize Firebase
   if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database();
