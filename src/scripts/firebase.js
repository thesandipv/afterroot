import firebase from "firebase/app"
import "firebase/database"
export const firebaseConfig = {
  apiKey: "AIzaSyALjnvK24GNHeRXsU_XGVgzPQLgVua39Xw",
  authDomain: "afterhashroot.firebaseapp.com",
  databaseURL: "https://afterhashroot.firebaseio.com",
  projectId: "afterhashroot",
  storageBucket: "afterhashroot.appspot.com",
  messagingSenderId: "506969783274",
  appId: "1:506969783274:web:f5b8757df611b355eb9093",
  measurementId: "G-9ZCRKF7DZY",
}
var app = firebase.initializeApp(firebaseConfig)

export default firebase
export function getDatabase() {
  return app.database()
}
