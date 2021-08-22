import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyArfXm3o3lJiNQ3ID8atQL-gRlvjzQuYzM",
  authDomain: "smart-business-lab-ab9be.firebaseapp.com",
  projectId: "smart-business-lab-ab9be",
  storageBucket: "smart-business-lab-ab9be.appspot.com",
  messagingSenderId: "1096863400028",
  appId: "1:1096863400028:web:42eb42b9393b5debd32699",
  measurementId: "G-TCMXXSRHK7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//Database
const db = firebaseApp.firestore();

//Authentication
const auth = firebase.auth();

//Google Authentication provider
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;