import firebase from "firebase/app"
import "firebase/database"
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
var app = firebase.initializeApp(firebaseConfig)

export default firebase
export function getDatabase() {
  return app.database()
}
