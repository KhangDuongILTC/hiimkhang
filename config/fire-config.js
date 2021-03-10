import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCfGw4ozF5tmn7CJl7-X9I9VV_4pEcx1k8",
  authDomain: "khang-blog.firebaseapp.com",
  projectId: "khang-blog",
  storageBucket: "khang-blog.appspot.com",
  messagingSenderId: "1034929822546",
  appId: "1:1034929822546:web:a04e9cec041bc6e289f88b",
};
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}
const fire = firebase;
export default fire;
