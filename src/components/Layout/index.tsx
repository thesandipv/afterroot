import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import SEO from "../SEO"

interface Props {
  children?: any
  title: string
  navIcon?: any
  headerTitle?: string
}

const Layout = ({ children, title, navIcon, headerTitle }: Props) => {
  if (headerTitle == null) headerTitle = title
  return (
    <>
      <SEO title={title} />
      <Header title={headerTitle} navIcon={navIcon} />
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
