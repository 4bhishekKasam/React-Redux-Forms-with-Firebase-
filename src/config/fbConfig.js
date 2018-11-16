import * as firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDaegmkXnz-bF_nD31YsKnqrxAl6UYch-I",
  authDomain: "userinfoform.firebaseapp.com",
  databaseURL: "https://userinfoform.firebaseio.com",
  projectId: "userinfoform",
  storageBucket: "userinfoform.appspot.com",
  messagingSenderId: "759386227323"
};

firebase.initializeApp(config);

export const database = firebase.database().ref("/notes");
