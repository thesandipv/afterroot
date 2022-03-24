import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx("hero", "p-0")}>
      <div className="container h-[80vh] flex flex-col items-center justify-center">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className="flex items-center justify-center">
          <Link
            className="text-lg button button--secondary button--lg"
            to="/blog"
          >
            Go to Blog
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      wrapperClassName={"h-[80vh]"}
      title={`${siteConfig.title}`}
      description="Everything is Connected"
    >
      <HomepageHeader />
    </Layout>
  )
}
