import React, { Component } from "react"
import { Typography } from "@rmwc/typography"
import { Button } from "@rmwc/button"
import { Grid, GridCell } from "@rmwc/grid"
import "./appsection.scss"

class AppSection extends Component {
  render() {
    const { title } = this.props
    return (
      <section className="section-2">
        <div className="container text-center">
          <Typography use="headline4" className="text-overline" tag="h5">
            {title != null ? title : null}
          </Typography>
          <Grid>
            <GridCell span="6">
              <div className="mdc-card card-with-text">
                <img
                  className="img-fluid card-img"
                  src="./image/prlogo.png"
                  height="150"
                  alt=""
                />
                <Typography use="headline6" tag="h2">
                  Pointer Replacer
                </Typography>
                <p>
                  <Button href="#" label="Learn More" unelevated />
                </p>
              </div>
            </GridCell>
            <GridCell span="6">
              <div className="mdc-card card-with-text">
                <img
                  className="img-fluid card-img"
                  src="./image/showtouchlogo.png"
                  height="150"
                  alt=""
                />
                <Typography use="headline6" tag="h2">
                  ShowTouchesEnabler
                </Typography>
                <p>
                  <Button href="#" label="Learn More" unelevated />
                </p>
              </div>
            </GridCell>
          </Grid>
        </div>
      </section>
    )
  }
}

export default AppSection
