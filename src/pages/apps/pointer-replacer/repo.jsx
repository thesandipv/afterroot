import React from "react"
import Layout from "../../../components/Layout"
import Container from "../../../components/Container/container"
import * as firebaseui from "firebaseui"
import firebase, { initFirebase } from "../../../scripts/firebase"

var uiConfig = {
  signInSuccessUrl: "<url-to-redirect-to-on-success>",
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  tosUrl: "/privacy-policy",
  // Privacy policy url/callback.
  privacyPolicyUrl: function() {
    window.location.assign("/privacy-policy")
  },
}

var ui = new firebaseui.auth.AuthUI(initFirebase().auth())
ui.start("#fb_ui", uiConfig)

export default () => (
  <>
    <Layout title="Pointer Repository" navIcon="arrow_back">
      <Container styles={{ textAlign: "center" }}></Container>
      <div id="fb_ui"></div>
    </Layout>
  </>
)
