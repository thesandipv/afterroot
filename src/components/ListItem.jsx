import React, { Component } from "react"
import firebase from "../scripts/firebase"
import {
  ListItem,
  ListItemText,
  ListItemPrimaryText,
  ListItemSecondaryText,
} from "@rmwc/list"
import "./ListItem/listitem.scss"

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
            <ListItem key={app.title}>
              <ListItemText>
                <ListItemPrimaryText>{app.title}</ListItemPrimaryText>
                <ListItemSecondaryText>{app.description}</ListItemSecondaryText>
              </ListItemText>
            </ListItem>
          )
        })}
      </>
    )
  }
}

export default FireListItem
