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
import styles from "./footer.module.scss"
import config from "../../../data/SiteConfig"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"

interface IProps {}

interface IState {
  extraLinks: { title: string; url: string; isExternal: boolean }[]
}

class Footer extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      extraLinks: [],
    }
  }

  componentDidMount() {
    this.setState({
      extraLinks: config.footerLinks,
    })
  }

  render() {
    return (
      <footer>
        <div className="dropdown-divider" />
        <div className={`${styles.footerLinks} mdc-typography--overline`}>
          {this.state.extraLinks.map((link) => {
            let separator, target
            if (
              this.state.extraLinks.indexOf(link) !=
              this.state.extraLinks.length - 1
            ) {
              separator = "|"
            }
            if (link.isExternal) {
              target = "_blank"
            }
            return (
              <span key={link.title}>
                <a
                  className={styles.footerItem}
                  href={link.url}
                  target={target}
                >
                  {link.title}
                </a>
                {separator}
              </span>
            )
          })}
        </div>
        <ul className={styles.socialList}>
          <li>
            <a
              href={config.links.igUrl}
              rel="noopener noreferrer"
              aria-label="Find AfterROOT on Instagram"
              target="_blank"
              title="Find AfterROOT on Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a
              href={config.links.ytUrl}
              rel="noopener noreferrer"
              aria-label="Find AfterROOT on YouTube"
              target="_blank"
              title="Find AfterROOT on YouTube"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
          <li>
            <a
              href={config.links.fbUrl}
              rel="noopener noreferrer"
              aria-label="Find AfterROOT on Facebook"
              target="_blank"
              title="Find AfterROOT on Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a
              href={config.links.twitterUrl}
              rel="noopener noreferrer"
              aria-label="Find AfterROOT on Twitter"
              target="_blank"
              title="Find AfterROOT on Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a
              href={config.links.githubUrl}
              rel="noopener noreferrer"
              aria-label="Projects on GitHub"
              target="_blank"
              title="Projects on GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
        <div className={`${styles.footerLinks} justify-content-center`}>
          {/*<StaticQuery TODO - different logic for build time
            query={graphql`
              query {
                currentBuildDate {
                  currentDate
                }
              }
            `}
            render={data => (
              <span
                className="mdc-typography"
                style={{ fontSize: "0.7em", textAlign: "center" }}
                id="_version"
              >
                {config.copyright} • v{config.version} • Built on{" "}
                {data.currentBuildDate.currentDate}
                <br />
                Developed with{" "}
                {<a href={config.links.jetbrains}>IntelliJ IDEA</a>} and{" "}
                {<a href={config.links.vsCode}>VS Code</a>}
              </span>
            )}
          />*/}
        </div>
      </footer>
    )
  }
}

export default Footer
