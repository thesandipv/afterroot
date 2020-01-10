import React from "react"
import Header from "../Header"
import Footer from "../Footer"

export default ({ children, title }) => (
  <>
    <Header title={title}></Header>
    <div>{children}</div>
    <Footer />
  </>
)
