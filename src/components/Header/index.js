import React, { Component } from "react"
import "./header.scss"
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarFixedAdjust,
  TopAppBarSection,
  TopAppBarTitle,
} from "@rmwc/top-app-bar"
import { Link } from "gatsby"

class Header extends Component {
  render() {
    const { title } = this.props
    return (
      <>
        <TopAppBar fixed>
          <TopAppBarRow>
            <TopAppBarSection alignStart>
              <Link to="/">
                <img
                  className="header-logo mdc-top-app-bar__navigation-icon"
                  src="image/logo_64.png"
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
