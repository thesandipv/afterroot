import React from "react"
import Layout from "src/components/Layout"
import YouTube, {Options} from "react-youtube"
import Container from "src/components/Container/container"

const options: Options = {
  playerVars: {
    autoplay: 0,
  },
}

export default () => (
  <>
    <Layout title="Pointer Replacer" navIcon="arrow_back">
      <Container styles={{ textAlign: "center", alignContent: "center" }}>
        <YouTube id="player" videoId="eWcV0PUwlzs" opts={options} />
      </Container>
    </Layout>
  </>
)
