import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBrHyOsbjqXKMSaXYMNKuukAM5QDvOC28I",
    authDomain: "greener-nexus.firebaseapp.com",
    databaseURL: "https://greener-nexus.firebaseio.com",
    projectId: "greener-nexus",
    storageBucket: "greener-nexus.appspot.com",
    messagingSenderId: "323185231588",
    appId: "1:323185231588:web:943b98972c59ecfc068ef1",
    measurementId: "G-9TTJB0KCVZ"
  };

firebase.initializeApp(firebaseConfig)

export default firebase