import React from "react"
import Layout from "src/components/Layout"
import "./index.scss"
import {Typography} from "@rmwc/typography"
import SEO from "../components/SEO"
import AppSection from "../components/AppSection"

export default class extends React.Component {
  public render() {
    return (
      <>
        <SEO title="AfterROOT" />
        <Layout title="AfterROOT" navIcon={null}>
          <main className="main">
            <section className="eic-section">
              <h1 className="title-bg text-overline fade-in-left">
                Everything's
                <br />
                connected
              </h1>
              <br />
            </section>
            <section className="section-1">
              <div
                className="align-self-center color-white text-center"
                style={{
                  backgroundColor: "#00000083",
                  width: "100%",
                }}
              >
                <div style={{ margin: "48px 0px 48px" }}>
                  <Typography
                    use="headline4"
                    tag="h6"
                    className="text-overline"
                  >
                    About Us
                  </Typography>
                  <Typography use="body1" tag="p" className="ml-5 mr-5">
                    AfterROOT, Started just for fun. But now it has aim. We go
                    to after the root. <br />
                    That's why it's named AfterROOT. Let's build the world
                    better together from the ROOT.
                  </Typography>
                </div>
              </div>
            </section>
            <AppSection title="Our Apps" />
          </main>
        </Layout>
      </>
    )
  }
}
