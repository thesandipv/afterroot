import React from "react"
import Layout from "src/components/Layout"
import Container from "src/components/Container/container"

export default () => (
  <>
    <Layout title="Pointer Replacer" navIcon="arrow_back">
      <Container
        styles={{
          position: "relative",
          overflow: "hidden",
          paddingTop: "56.25%",
          width: "100%",
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/eWcV0PUwlzs"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </Container>
    </Layout>
  </>
)
