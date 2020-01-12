import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "",
  authDomain: "pattern-debate.firebaseapp.com",
  databaseURL: "https://pattern-debate.firebaseio.com",
  projectId: "pattern-debate",
  storageBucket: "gs://pattern-debate.appspot.com/",
  messagingSenderId: "1090469049830",
  appId: "1:1090469049830:web:00c529ebd8a9ba15011227",
  measurementId: "G-59CX3PK3K2"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
