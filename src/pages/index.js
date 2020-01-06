import React from "react"
import Layout from "../components/Layout"
import Helmet from "react-helmet"
import styles from "./index.module.scss"

export default () => (
  <>
    <Helmet title="AfterROOT" />
    <Layout>
      <main className={styles.main}>
        <section className={styles.eicSection}>
          <h1
            className={[
              styles.titleBg,
              styles.textOverline,
              styles.fadeInLeft,
            ].join(" ")}
          >
            Everything's
            <br />
            connected
          </h1>
          <br />
        </section>
      </main>
    </Layout>
  </>
)
