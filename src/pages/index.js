import React from "react"
import Header from "../components/Header/header"
import config from "../../data/SiteConfig"
import { Link } from "gatsby"

export default () => (
  <div style={{ color: `purple` }}>
    <Header title={config.siteTitle} />
    <p>What a world.</p>
    <Link to="/contact/">Contact</Link>
  </div>
)
