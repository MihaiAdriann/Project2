// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJQLkQpWBxPYIFacg3tIHiqNzMAEk1MiA",
  authDomain: "project2-d0d02.firebaseapp.com",
  projectId: "project2-d0d02",
  storageBucket: "project2-d0d02.appspot.com",
  messagingSenderId: "374081197313",
  appId: "1:374081197313:web:b46a461e9e042f26933700"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new FacebookAuthProvider();

export {auth, provider}
