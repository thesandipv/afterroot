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
    const { title, navIcon } = this.props
    var icon
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
                  src="/image/logo_64.png"
                  alt="afterroot"
                />
              </Link>
              <TopAppBarTitle>{title}</TopAppBarTitle>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <TopAppBarFixedAdjust />
      </>
    )
  }
}
export default Header
