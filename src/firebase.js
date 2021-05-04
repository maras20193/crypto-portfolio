import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxLCzllw5Wctfe7tFcCjvqUqxuJy7PJdo",
  authDomain: "crypto-portfolio-4b98c.firebaseapp.com",
  projectId: "crypto-portfolio-4b98c",
  storageBucket: "crypto-portfolio-4b98c.appspot.com",
  messagingSenderId: "103468579113",
  appId: "1:103468579113:web:80267db56f54faf2461f38",
  measurementId: "G-JWBDH06TEE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth };
export default db;