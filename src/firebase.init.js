// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI-TeysLKZZr18UPpbU9W4AU1gRkX4J9g",
  authDomain: "genius-car-service-c2001.firebaseapp.com",
  projectId: "genius-car-service-c2001",
  storageBucket: "genius-car-service-c2001.appspot.com",
  messagingSenderId: "159661285695",
  appId: "1:159661285695:web:0fecb4ee2dcf9ccdae338a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
