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

import React, { Component } from "react"
import Layout from "src/components/Layout"
import Container from "src/components/Container/container"
import * as firebaseui from "firebaseui"
import firebase, { initFirebase } from "src/scripts/firebase"
import "node_modules/firebaseui/dist/firebaseui.css"

class Repo extends Component {
  componentDidMount() {
    let uiConfig: firebaseui.auth.Config = {
      callbacks: {
        signInSuccessWithAuthResult: function() {
          return true
        },
        uiShown: function() {
          // @ts-ignore
          document.getElementById("loader").style.display = "none"
        },
      },
      signInOptions: [
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          customParameters: {
            prompt: "select_account",
          },
        },
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      tosUrl: "/privacy-policy",
      privacyPolicyUrl: "/privacy-policy",
    }

    const ui = new firebaseui.auth.AuthUI(initFirebase().auth())
    ui.start("#fb_ui", uiConfig)
  }

  render() {
    return (
      <>
        <Layout title="Pointer Repository" navIcon="arrow_back">
          <Container styles={{ textAlign: "center" }} />
          <div id="fb_ui" />
          <div id="loader" style={{ textAlign: "center" }}>
            Loading...
          </div>
        </Layout>
      </>
    )
  }
}

export default Repo
