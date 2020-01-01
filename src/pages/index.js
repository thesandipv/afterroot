import React from "react"
import Header from "../components/header"
import config from "../../data/SiteConfig"
import { Link } from "gatsby"

export default () => (
  <div style={{ color: `purple` }}>
    <Header headerText={config.siteTitle} />
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <Link to="/contact/">Contact</Link>
  </div>
)
