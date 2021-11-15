import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBIs-TOpq0eMvuSAB_RpL37s82bAhOZHhk",
  authDomain: "linkedin-clone-fef83.firebaseapp.com",
  projectId: "linkedin-clone-fef83",
  storageBucket: "linkedin-clone-fef83.appspot.com",
  messagingSenderId: "175243073293",
  appId: "1:175243073293:web:19ecc25af2b9c6d77a4244",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
