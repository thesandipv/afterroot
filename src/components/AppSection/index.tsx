/*
 * Copyright (C) 2020-2022 Sandip Vaghela
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
import FireListItem from "../ListItem/ListItem"

interface Props {
  title?: string
}

class AppSection extends Component<Props> {
  render() {
    // initFirebase()
    let sectionTitle = null
    const { title } = this.props
    if (title != null) {
      sectionTitle = (
        <h6 className="text-4xl text-center">{this.props.title}</h6>
      )
    }
    return (
      <section>
        <div className="container mx-auto">
          {sectionTitle}
          <FireListItem dbRef="apps" />
        </div>
      </section>
    )
  }
}

export default AppSection
