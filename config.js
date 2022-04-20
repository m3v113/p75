import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDEYndgsDO_OzEfsmKU7uF8qge1Xh7Yroc",
  authDomain: "ride-1eabf.firebaseapp.com",
  projectId: "ride-1eabf",
  storageBucket: "ride-1eabf.appspot.com",
  messagingSenderId: "806820734841",
  appId: "1:806820734841:web:ed509201ab32fe6cbb31a8"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
