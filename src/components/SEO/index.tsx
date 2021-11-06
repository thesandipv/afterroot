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

import React from "react"
import Head from "next/head"

class SEO extends React.Component<SEOProps> {
  static defaultProps = {
    description: "EIC",
    keywords: ["afterroot"],
    appName: "AfterROOT",
  }

  render() {
    let { description, keywords, title, appName } = this.props
    return (
      <Head>
        <title>{title} | AfterROOT</title>
        <meta name="application-name" content={appName} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords?.join(", ")} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={appName} />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content={title} />
        <meta
          name="og:description"
          property="og:description"
          content={description}
        />
        <meta property="og:site_name" content="" />
        <meta property="og:url" content="" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="@thesandipv" />
        <meta name="twitter:image" content="" />
        <meta property="og:image" content="" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#FFFFFF" />
        <link rel="icon" type="image/png" href={"/icons/favicon.png"} />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="192x192"
          href={"/icons/favicon.png"}
        />
        <link rel="manifest" href="/manifest.json" />

        <script
          async
          src=""
          /* TODO Add Analytics */
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                /* TODO Add Analytics */
              `,
          }}
        />
      </Head>
    )
  }
}

export interface SEOProps {
  description?: string
  lang?: string
  meta?: any[]
  keywords?: string[]
  title: string
  appName?: string
}

export default SEO
