import React from "react"
import Header from "../Header"
import config from "../../../data/SiteConfig"

export default ({ children }) => (
  <>
    <Header title={config.siteTitle}></Header>
    <div>{children}</div>
  </>
)
