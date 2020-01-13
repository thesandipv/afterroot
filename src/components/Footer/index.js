import React, { Component } from "react"
import "./footer.scss"
import { Link } from "gatsby"
import config from "../../../data/SiteConfig"

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="dropdown-divider" />
        <div className="footer-links mdc-typography--overline">
          <Link className="footer-item" to="/about">
            About
          </Link>
          <Link className="footer-item" to="/privacy-policy">
            Privacy Policy
          </Link>
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
              <img
                className="icon icon--social"
                src="./assets/ig_logo.png"
                alt=""
              />
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
              <img
                className="icon icon--social icon--padding"
                src="./assets/youtube_logo.png"
                alt=""
              />
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
              <img
                className="icon icon--social icon--padding"
                src="./assets/fb_logo.png"
                alt=""
              />
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
              <img
                className="icon icon--social"
                src="./assets/twitter_logo.svg"
                alt=""
              />
            </a>
          </li>
        </ul>
        <div className="footer-links justify-content-center">
          <span
            className="mdc-typography"
            style={{ fontSize: "0.7em" }}
            id="_version"
          >
            {config.copyright} • v{config.version}
          </span>
        </div>
      </footer>
    )
  }
}

export default Footer
