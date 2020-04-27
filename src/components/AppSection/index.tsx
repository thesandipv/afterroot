import React, {Component} from "react"
import {Typography} from "@rmwc/typography"
import {List} from "@rmwc/list"
import "./appsection.scss"
import FireListItem from "../ListItem/ListItem"

interface Props {
  title?: string
}

class AppSection extends Component<Props> {
  render() {
    let sectionTitle = null
    const { title } = this.props
    if (title != null) {
      sectionTitle = (
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
          {sectionTitle}
          <List twoLine>
            <FireListItem dbRef="apps" />
          </List>
        </div>
      </section>
    )
  }
}

export default AppSection
