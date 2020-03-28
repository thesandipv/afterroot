import React, { Component } from "react"
import firebase from "../../scripts/firebase"
import {
  ListItem,
  ListItemText,
  ListItemPrimaryText,
  ListItemSecondaryText,
} from "@rmwc/list"
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
    const appsRef = firebase.database().ref(this.props.dbRef)
    appsRef.on("value", snapshot => {
      let apps = snapshot.val()
      let newState = []
      for (let app in apps) {
        newState.push({
          title: apps[app].title,
          description: apps[app].description,
          path: apps[app].path,
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
        {this.state.apps.map(app => {
          return (
            <Link to={app.path} style={{ textDecoration: "none" }}>
              <ListItem key={app.path}>
                <ListItemText>
                  <ListItemPrimaryText>{app.title}</ListItemPrimaryText>
                  <ListItemSecondaryText>
                    {app.description}
                  </ListItemSecondaryText>
                </ListItemText>
              </ListItem>
            </Link>
          )
        })}
      </>
    )
  }
}

export default FireListItem
