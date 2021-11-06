/*
 * Copyright (C) 2020 Sandip Vaghela
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

import React, { Component } from "react"
import styles from "./header.module.scss"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"

export interface HeaderProps {
  title: string
  navIcon?: any
  onDrawerToggle?: () => void
}

class Header extends Component<HeaderProps> {
  render() {
    const { title, navIcon, onDrawerToggle } = this.props
    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                onClick={onDrawerToggle}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                {navIcon}
              </IconButton>
              <img
                height={64}
                width={64}
                className={`${styles.headerLogo} ${styles.mdcTopAppBar__navigationIcon}`}
                src="/logos/ar_logo.svg"
                alt="afterroot"
              />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {title}
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </>
    )
  }
}

export default Header
