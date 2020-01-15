import React from "react"
import Header from "../Header"
import Footer from "../Footer"

export default ({ children, title, navIcon }) => (
  <>
    <Header title={title} navIcon={navIcon}></Header>
    <div>{children}</div>
    <Footer />
  </>
)
