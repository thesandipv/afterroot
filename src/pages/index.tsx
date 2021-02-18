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

import React from "react"
import Layout from "src/components/Layout"
import "./index.scss"
import { Typography } from "@rmwc/typography"
import SEO from "../components/SEO"
import AppSection from "../components/AppSection"
import { Unsplash } from "../types"

interface IProps {}

interface IState {
  unsplashResponse?: Unsplash
}

export default class extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { unsplashResponse: undefined }
  }

  public render() {
    return (
      <>
        <SEO title="AfterROOT" />
        <Layout title="AfterROOT" navIcon={null} disableFixAdjust={true}>
          <main className="main">
            <section className="eic-section">
              <img
                className="unsplash-image"
                src={
                  // this.state.unsplashResponse
                  //   ? this.state.unsplashResponse.urls.regular
                  "/assets/background.webp"
                }
                alt="Unsplash Image"
              />
              <h1 className="title-bg text-overline fade-in-left color-white">
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

  async componentDidMount() {
    this.setState({
      // unsplashResponse: await this.getRandomPhoto(),
    })
  }

  private getRandomPhoto(): Promise<Unsplash> {
    return new Promise<Unsplash>(async resolve => {
      const searchUrl: string =
        "https://api.unsplash.com/photos/random/" +
        `?client_id=${process.env.UNSPLASH_KEY}`
      try {
        const rawResponse: Response = await fetch(searchUrl)

        const response: Unsplash = JSON.parse(await rawResponse.text())
        if (!response) {
          resolve(undefined)
          return
        }
        await this.registerDownload(response.id)
        resolve(response.urls ? response : undefined)
      } catch (err) {
        resolve(undefined)
      }
    })
  }

  private registerDownload(photoId: string): Promise<void> {
    return new Promise<void>(async resolve => {
      const downloadUrl: string =
        "https://api.unsplash.com/" +
        `photos/${photoId}/download/?client_id=${process.env.UNSPLASH_KEY}`

      try {
        await fetch(downloadUrl)

        resolve()
      } catch (err) {
        resolve()
        console.log(err)
      }
    })
  }
}
