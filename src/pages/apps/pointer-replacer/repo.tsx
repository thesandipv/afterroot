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
