import React, { Component } from "react"
import { Typography } from "@rmwc/typography"
import { List } from "@rmwc/list"
import "./appsection.scss"
import FireListItem from "../ListItem/ListItem"

class AppSection extends Component {
  render() {
    var title = null
    if (this.props.title != null) {
      title = (
        <Typography
          use="headline4"
          className="text-overline text-center"
          tag="h5"
        >
          {this.props.title}
        </Typography>
      )
    }
    return (
      <section className="section-2">
        <div className="container">
          {title}
          <List twoLine>
            <FireListItem dbRef="apps" />
          </List>
        </div>
      </section>
    )
  }
}

export default AppSection
