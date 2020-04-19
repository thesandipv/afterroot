import React, { Component } from "react"
import Layout from "../../../components/Layout"
import Container from "../../../components/Container/container"
import * as firebaseui from "firebaseui"
import firebase, { initFirebase } from "../../../scripts/firebase"
import "../../../../node_modules/firebaseui/dist/firebaseui.css"

class Repo extends Component {
  componentDidMount() {
    var uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          return true
        },
        uiShown: function() {
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

    var ui = new firebaseui.auth.AuthUI(initFirebase().auth())
    ui.start("#fb_ui", uiConfig)
  }

  render() {
    return (
      <>
        <Layout title="Pointer Repository" navIcon="arrow_back">
          <Container styles={{ textAlign: "center" }}></Container>
          <div id="fb_ui"></div>
          <div id="loader" style={{ textAlign: "center" }}>
            Loading...
          </div>
        </Layout>
      </>
    )
  }
}

export default Repo
