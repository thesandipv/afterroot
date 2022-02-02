/*
 * Copyright (C) 2020 Sandip Vaghela
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { initializeApp } from "firebase/app"
import { getRemoteConfig } from "firebase/remote-config"
// import "firebase/analytics"

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
let app: any

export function initFirebase() {
  if (app == null) {
    console.log("Initializing Firebase app")
    app = initializeApp(firebaseConfig)
  }
  console.log("Firebase app already initialized")
  return app
}

export default app
export const myRemoteConfig = getRemoteConfig()
