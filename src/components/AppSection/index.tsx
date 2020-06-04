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
