import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6enOp925ZvaCR75e-tarfNGNvZKBANHc",
  authDomain: "hireon-832cc.firebaseapp.com",
  projectId: "hireon-832cc",
  storageBucket: "hireon-832cc.appspot.com",
  messagingSenderId: "664107914372",
  appId: "1:664107914372:web:b9737c82e3ba2864331ed1",
  measurementId: "G-Q5HGC33ZJ2",
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service

export { app };
