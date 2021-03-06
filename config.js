import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyA7g0I3590U5ENhDIkhYbc40m_t-NaMlJ8",
  authDomain: "wily-app-4ff14.firebaseapp.com",
  databaseURL: "https://wily-app-4ff14-default-rtdb.firebaseio.com",
  projectId: "wily-app-4ff14",
  storageBucket: "wily-app-4ff14.appspot.com",
  messagingSenderId: "686250765046",
  appId: "1:686250765046:web:22317c1cbe068d52dcdad7"

};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
