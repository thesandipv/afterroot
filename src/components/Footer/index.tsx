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
  private COMMIT: any

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
        <div className="mx-4 border-t border-slate-300/10" />
        <div className="flex flex-wrap flex-row items-center justify-center p-2 w-full">
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
                <a className="px-2" href={link.url} target={target}>
                  {link.title}
                </a>
                {separator}
              </span>
            )
          })}
        </div>
        <ul className="flex flex-wrap justify-center items-center">
          <li className="mx-2">
            <a
              className="text-white/50 hover:text-white transition-colors"
              href={config.links.igUrl}
              rel="noopener noreferrer"
              aria-label="Find AfterROOT on Instagram"
              target="_blank"
              title="Find AfterROOT on Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li className="mx-2">
            <a
              className="text-white/50 hover:text-white transition-colors"
              href={config.links.ytUrl}
              rel="noopener noreferrer"
              aria-label="Find AfterROOT on YouTube"
              target="_blank"
              title="Find AfterROOT on YouTube"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
          <li className="mx-2">
            <a
              className="text-white/50 hover:text-white transition-colors"
              href={config.links.fbUrl}
              rel="noopener noreferrer"
              aria-label="Find AfterROOT on Facebook"
              target="_blank"
              title="Find AfterROOT on Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li className="mx-2">
            <a
              className="text-white/50 hover:text-white transition-colors"
              href={config.links.twitterUrl}
              rel="noopener noreferrer"
              aria-label="Find AfterROOT on Twitter"
              target="_blank"
              title="Find AfterROOT on Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className="mx-2">
            <a
              className="text-white/50 hover:text-white transition-colors"
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
        <div className="flex flex-wrap flex-row items-center justify-center p-2 w-full">
          <span className="text-center text-xs" id="_version">
            {config.copyright} • v{config.version}-
            {
              <a
                className="underline"
                target="_blank"
                rel="noreferrer"
                href={`${config.links.githubProjectUrl}/tree/${config.commitShaLong}`}
              >
                {config.commitSha}
              </a>
            }{" "}
            • Built on {config.buildDate}
            <br />
            Developed with{" "}
            {
              <a className="underline" href={config.links.jetbrains}>
                IntelliJ IDEA
              </a>
            }{" "}
            and{" "}
            {
              <a className="underline" href={config.links.vsCode}>
                VS Code
              </a>
            }
          </span>
        </div>
      </footer>
    )
  }
}

export default Footer
