// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCXB771Wy9ncHrZXs5dq2FcKYu8Y-_GTw8",
	authDomain: "miniblog-863fd.firebaseapp.com",
	projectId: "miniblog-863fd",
	storageBucket: "miniblog-863fd.appspot.com",
	messagingSenderId: "916374483044",
	appId: "1:916374483044:web:6c75bc1c9f3fe54a21ef71",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
