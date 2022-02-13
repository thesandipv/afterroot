/*
 * Copyright (C) 2020-2022 Sandip Vaghela
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import SEO from "../SEO"
import { ThemeProvider } from "@mui/material/styles"
import theme from "../../ui/theme"

interface Props {
  children?: any
  title: string
  navIcon?: any
  headerTitle?: string
}

class Layout extends React.Component<Props> {
  render() {
    let { children, title, navIcon, headerTitle } = this.props
    return (
      <>
        <ThemeProvider theme={theme}>
          <SEO title={title} />
          <Header
            title={headerTitle ? headerTitle : title}
            navIcon={navIcon}
            onDrawerToggle={() => {}}
          />
          {children}
          <Footer />
        </ThemeProvider>
      </>
    )
  }
}

export default Layout
