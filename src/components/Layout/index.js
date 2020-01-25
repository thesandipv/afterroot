import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import SEO from "../SEO"

export default ({ children, title, navIcon }) => (
  <>
    <SEO title={title} />
    <Header title={title} navIcon={navIcon}></Header>
    <div>{children}</div>
    <Footer />
  </>
)
