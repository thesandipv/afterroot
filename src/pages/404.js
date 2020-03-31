import React from "react"
import Layout from "../components/Layout"
import "./index.scss"
import SEO from "../components/SEO"

export default () => (
  <>
    <SEO title="AfterROOT" />
    <Layout title="AfterROOT">
      <main className="main">
        <section className="eic-section">
          <h1 className="title-bg text-overline fade-in-left">
            Error - 404 - Not Found
          </h1>
          <br />
        </section>
      </main>
    </Layout>
  </>
)
