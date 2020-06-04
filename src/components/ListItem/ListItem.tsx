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
import { getDatabase } from "../../scripts/firebase"
import { List, SimpleListItem } from "@rmwc/list"
import "./listitem.scss"
import { Link } from "gatsby"

interface IProps {
  dbRef: string
}

interface IState {
  apps: App[]
}

interface App {
  title: any
  description: any
  path: string
  graphic: string
}

class FireListItem extends Component<IProps, IState> {
  constructor(props: IProps) {
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
        if (apps.hasOwnProperty(app)) {
          newState.push({
            title: apps[app].title,
            description: apps[app].description,
            path: `/apps/${apps[app].path}`,
            graphic: `/logos/${apps[app].path}.png`,
          })
        }
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
