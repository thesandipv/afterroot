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
import "./header.scss"
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarFixedAdjust,
  TopAppBarSection,
  TopAppBarTitle,
} from "@rmwc/top-app-bar"
import { Ripple } from "@rmwc/ripple"
import { Link } from "gatsby"

class Header extends Component {
  render() {
    const { title, navIcon, disableFixAdjust } = this.props
    let icon
    if (navIcon != null) {
      icon = (
        <Ripple unbounded>
          <span className="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button">
            {navIcon}
          </span>
        </Ripple>
      )
    } else {
      icon = null
    }
    return (
      <>
        <TopAppBar fixed>
          <TopAppBarRow>
            <TopAppBarSection alignStart>
              <Link to="/">
                {icon}
                <img
                  className="header-logo mdc-top-app-bar__navigation-icon"
                  src="/assets/logo_64.png"
                  alt="afterroot"
                />
              </Link>
              <TopAppBarTitle>{title}</TopAppBarTitle>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        {disableFixAdjust ? null : <TopAppBarFixedAdjust />}
      </>
    )
  }
}
export default Header
