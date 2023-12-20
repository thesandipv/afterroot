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
import Layout from "components/Layout"
import SEO from "components/SEO"

export default PageContactUs

function PageContactUs() {
    return (
        <>
            <SEO
                title="Contact AfterROOT"
                description="view way to contact to AfterROOT"
            />
            <Layout title="Contact Us">
                <main className="main">
                    <div className="m-3 w-auto flex flex-col flex-auto">
                        <h2 className="text-lg">Request for deletation of account and data:</h2>
                        <p className="mt-1">To request for delete your account and data please send email by clicking below button.</p>
                        <p className="mt-1">Please include your name, email address and the app for which you are requesting to delete data in the email.</p>
                        <button className="mt-1 px-2 py-1 border rounded content-center">
                            <a href="mailto:afterhasroot@gmail.com">EMAIL US</a>
                        </button>
                    </div>
                </main>
            </Layout>
        </>
    )
}
