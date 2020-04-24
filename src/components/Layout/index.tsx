import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import SEO from "../SEO"

interface Props {
  children?: any
  title: string
  navIcon?: any
}

const Layout = ({ children, title, navIcon }: Props) => {
  return (
    <>
      <SEO title={title} />
      <Header title={title} navIcon={navIcon} />
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
