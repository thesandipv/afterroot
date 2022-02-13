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

import React, { Component } from "react"
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
        <div className="sticky top-0 w-full backdrop-blur flex-none bg-white dark:bg-slate-900/75">
          <div className="relative flex items-center py-2 lg:px-4 mx-4 lg:mx-0 border-b border-slate-300/10">
            {/*<IconButton
              onClick={onDrawerToggle}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {navIcon}
            </IconButton>*/}
            <img
              className="h-[48px] p-0.5 rounded-full bg-white"
              src="/logos/ar_logo.svg"
              alt="afterroot"
            />
            <p className="pl-4 flex-grow text-xl font-light">{title}</p>
          </div>
        </div>
      </>
    )
  }
}

export default Header
