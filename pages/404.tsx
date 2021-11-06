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
import Layout from "../src/components/Layout"
import "./index.scss"
import SEO from "../src/components/SEO"

export default () => (
  <>
    <SEO title="404 - Not Found - AfterROOT" />
    <Layout headerTitle="AfterROOT" title="404 - Not Found - AfterROOT">
      <main className="main">
        <section className="eic-section">
          <h1 className="title-bg text-overline">404 - Not Found</h1>
          <br />
        </section>
      </main>
    </Layout>
  </>
)
