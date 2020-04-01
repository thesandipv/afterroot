import React, { Component } from "react"
import { getDatabase } from "../../scripts/firebase"
import { List, SimpleListItem } from "@rmwc/list"
import "./listitem.scss"
import { Link } from "gatsby"

class FireListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apps: [],
    }
  }

  componentDidMount() {
    const appsRef = getDatabase().ref(this.props.dbRef)
    appsRef.on("value", snapshot => {
      let apps = snapshot.val()
      let newState = []
      for (let app in apps) {
        newState.push({
          title: apps[app].title,
          description: apps[app].description,
          path: `/apps/${apps[app].path}`,
          graphic: `/logos/${apps[app].path}.png`,
        })
      }
      this.setState({
        apps: newState,
      })
    })
  }

  render() {
    return (
      <>
        <List twoLine>
          {this.state.apps.map(app => {
            return (
              <Link to={app.path} className="appList" key={app.path}>
                <SimpleListItem
                  text={app.title}
                  secondaryText={app.description}
                  graphic={app.graphic}
                />
              </Link>
            )
          })}
        </List>
      </>
    )
  }
}

export default FireListItem
