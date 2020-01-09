import React from "react"
import Layout from "../components/Layout"
import Helmet from "react-helmet"
import "./index.scss"
import { Typography } from "@rmwc/typography"
import { Button } from "@rmwc/button"
import { Grid, GridCell } from "@rmwc/grid"

export default () => (
  <>
    <Helmet title="AfterROOT" />
    <Layout>
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
            className="align-self-center, text-white, text-center"
            style={{
              backgroundColor: "#00000083",
              width: "100%",
            }}
          >
            <div style={{ margin: "48px 0px 48px" }}>
              <Typography use="headline4" tag="h6" className="text-overline">
                About Us
              </Typography>
              <Typography use="body1" tag="p" className="ml-5 mr-5">
                AfterROOT, Started just for fun. But now it has aim. We go to
                after the root. <br />
                That's why it's named AfterROOT. Let's build the world better
                together from the ROOT.
              </Typography>
            </div>
          </div>
        </section>
        <section className="section-2">
          <div className="container text-center">
            <Typography use="headline4" className="text-overline" tag="h5">
              Our Apps
            </Typography>
            <Grid>
              <GridCell>
                <div className="mdc-card card-with-text">
                  <img
                    className="img-fluid card-img"
                    src="./image/prlogo.png"
                    height="250"
                    alt=""
                  />
                  <Typography use="headline6" tag="h2">
                    Pointer Replacer
                  </Typography>
                  <p>
                    <Button href="#" label="Learn More" />
                  </p>
                </div>
              </GridCell>
              <GridCell>
                <div className="mdc-card card-with-text">
                  <img
                    className="img-fluid card-img"
                    src="./image/showtouchlogo.png"
                    height="250"
                    alt=""
                  />
                  <Typography use="headline6" tag="h2">
                    ShowTouchesEnabler
                  </Typography>
                  <p>
                    <Button href="#" label="Learn More" />
                  </p>
                </div>
              </GridCell>
            </Grid>
          </div>
        </section>
      </main>
    </Layout>
  </>
)
