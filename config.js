import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  
    apiKey: "AIzaSyAyaVICPYw_TqqCrA_V2fiGF-Bvqn4vQyw",
    authDomain: "wily-83d4e.firebaseapp.com",
    projectId: "wily-83d4e",
    storageBucket: "wily-83d4e.appspot.com",
    messagingSenderId: "367832082553",
    appId: "1:367832082553:web:58e6dc169b1801568a8ca8",

};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
