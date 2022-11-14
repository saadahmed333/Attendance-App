import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { collection, query, where, onSnapshot, getFirestore, addDoc, doc,deleteDoc, updateDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { getStorage , ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";



const firebaseConfig = {
  apiKey: "AIzaSyDmbBC5lLkqjKXAoA53QccTmyDCC11jA7c",
  authDomain: "attendance-app-4ebd7.firebaseapp.com",
  projectId: "attendance-app-4ebd7",
  storageBucket: "attendance-app-4ebd7.appspot.com",
  messagingSenderId: "904053199996",
  appId: "1:904053199996:web:1a4fd593075868b3d965f9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);
export const storage = getStorage(app);
export {signInWithEmailAndPassword}
export {onSnapshot,collection, query, where, addDoc ,doc ,deleteDoc ,updateDoc, setDoc}
export {getStorage, ref, uploadBytesResumable, getDownloadURL, uploadBytes}

