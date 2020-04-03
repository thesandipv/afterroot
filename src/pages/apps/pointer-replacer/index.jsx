import React from "react"
import Layout from "../../../components/Layout"
import YouTube from "react-youtube"
import Container from "../../../components/Container/container"

const options = {
  playerVars: {
    autoplay: 0,
  },
}

export default () => (
  <>
    <Layout title="Pointer Replacer" navIcon="arrow_back">
      <Container styles={{ textAlign: "center" }}>
        <YouTube
          id="player"
          videoId="eWcV0PUwlzs"
          style={{ alignSelf: "center" }}
          opts={options}
        />
      </Container>
    </Layout>
  </>
)
