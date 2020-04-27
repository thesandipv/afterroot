import firebase from "firebase/app"
import "firebase/database"
import "firebase/analytics"

export const firebaseConfig = {
  apiKey: "AIzaSyCVgZRrAD3bWNq-wMsx0DA08BbbOaTk-qg",
  authDomain: "afterroot.firebaseapp.com",
  databaseURL: "https://afterroot.firebaseio.com",
  projectId: "afterroot",
  storageBucket: "afterroot.appspot.com",
  messagingSenderId: "910276298420",
  appId: "1:910276298420:web:1fd8216cb2422070f979e1",
  measurementId: "G-LJ042LZHR5",
}
let app: firebase.app.App

export function initFirebase() {
  if (app == null) {
    console.log("Initializing Firebase app")
    app = firebase.initializeApp(firebaseConfig)
  }
  console.log("Firebase app already initialized")
  return app
}

export function getDatabase() {
  return initFirebase().database()
}

export default firebase