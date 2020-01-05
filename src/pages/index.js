import React from "react"
import Header from "../components/Header"
import config from "../../data/SiteConfig"
import { Link } from "gatsby"

export default () => (
  <>
    <Header title={config.siteTitle} />
  </>
)
