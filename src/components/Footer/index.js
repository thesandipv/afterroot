import React, { Component } from "react"
import "./footer.scss"
import config from "../../../data/SiteConfig"
import { StaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faFacebook,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="dropdown-divider" />
        <div className="footer-links mdc-typography--overline">
          {window.location.pathname != "/about" ? (
            <Link className="footer-item" to="/about">
              About
            </Link>
          ) : null}
          {window.location.pathname != "/privacy-policy" ? (
            <Link className="footer-item" to="/privacy-policy">
              Privacy Policy
            </Link>
          ) : null}
        </div>
        <ul className="social-list">
          <li>
            <a
              href="https://www.instagram.com/afterroot/"
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
              href="https://www.youtube.com/channel/UCBoD9tMU--hsqlX9--Mrypw"
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
              href="https://www.facebook.com/afterroot"
              rel="noopener noreferrer"
              aria-label="Find AfterROOT on Facebook"
              target="_blank"
              title="Find AfterROOT on Facebook"
              data-g-event="site-footer-social"
              data-g-action="clicked"
              data-g-label="facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/afterroot"
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
              href="https://github.com/sandipv22"
              rel="noopener noreferrer"
              aria-label="Projects on GitHub"
              target="_blank"
              title="Projects on GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
        <div className="footer-links justify-content-center">
          <StaticQuery
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
                style={{ fontSize: "0.7em" }}
                id="_version"
              >
                {config.copyright} • v{config.version} • Built on{" "}
                {data.currentBuildDate.currentDate}
              </span>
            )}
          />
        </div>
      </footer>
    )
  }
}

export default Footer
