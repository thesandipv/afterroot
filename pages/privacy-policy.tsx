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
import Typography from "@mui/material/Typography"
import SEO from "../src/components/SEO"
import { ArrowBack } from "@mui/icons-material"

export default () => (
  <>
    <SEO title="Privacy Policy" description="view AfterROOT's Privacy Policy" />
    <Layout title="Privacy Policy" navIcon={<ArrowBack />}>
      <main className="main">
        <div className="container mt-3 mx-auto">
          <p>
            Sandip Vaghela (AfterROOT) built the Allusive(Pointer Replacer),
            ShowTouchesEnabler, WatchDone and Expenses app as an Ad Supported
            app.This SERVICE is provided by Sandip Vaghela (AfterROOT) at no
            cost and is intended for use as is.
          </p>
          <p>
            This policy is used to inform you regarding my policies with the
            collection, use, and disclosure of Personal Information if anyone
            decided to use my Service.
          </p>
          <p>
            If you choose to use my Service, then you agree to the collection
            and use of information in relation to this policy. The Personal
            Information that I collect is used for providing and improving the
            Service. I will not use or share your information with anyone except
            as described in this Privacy Policy.
          </p>
          <Typography variant="h6" component="h6" mt={1}>
            Information Collection and Use
          </Typography>
          <p>
            For a better experience, while using our Service, I may require you
            to provide us with certain personally identifiable information,
            including but not limited to Device Name, Device ID. The information
            that I request will be retained on your device and is not collected
            by me in any way.
          </p>
          <p>
            The app does use third party services that may collect information
            used to identify you.
          </p>
          <div>
            <p>
              Link to privacy policy of third party service providers used by
              the app
            </p>
            <ul>
              <li>
                <a
                  href="https://www.google.com/policies/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Play Services
                </a>
              </li>
              <li>
                <a
                  href="https://firebase.google.com/policies/analytics"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Firebase Analytics
                </a>
              </li>
            </ul>
          </div>
          <Typography variant="h6" component="h6" mt={1}>
            Log Data
          </Typography>
          <p>
            {" "}
            I want to inform you that whenever you use my Service, in a case of
            an error in the app I collect data and information (through third
            party products) on your phone called Log Data. This Log Data may
            include information such as your device Internet Protocol (“IP”)
            address, device name, operating system version, the configuration of
            the app when utilizing my Service, the time and date of your use of
            the Service, and other statistics.
          </p>

          <Typography variant="h6" component="h6" mt={1}>
            Cookies
          </Typography>
          <p>
            Cookies are files with a small amount of data that are commonly used
            as anonymous unique identifiers. These are sent to your browser from
            the websites that you visit and are stored on your device's internal
            memory.
          </p>
          <p>
            This Service does not use these “cookies” explicitly. However, the
            app may use third party code and libraries that use “cookies” to
            collect information and improve their services. You have the option
            to either accept or refuse these cookies and know when a cookie is
            being sent to your device. If you choose to refuse our cookies, you
            may not be able to use some portions of this Service.
          </p>

          <Typography variant="h6" component="h6" mt={1}>
            Service Providers
          </Typography>
          <p>
            {" "}
            I may employ third-party companies and individuals due to the
            following reasons:
          </p>
          <ul>
            <li className="mdc-typography">To facilitate our Service;</li>
            <li className="mdc-typography">
              To provide the Service on our behalf;
            </li>
            <li className="mdc-typography">
              To perform Service-related services; or
            </li>
            <li className="mdc-typography">
              To assist us in analyzing how our Service is used.
            </li>
          </ul>
          <p>
            {" "}
            I want to inform users of this Service that these third parties have
            access to your Personal Information. The reason is to perform the
            tasks assigned to them on our behalf. However, they are obligated
            not to disclose or use the information for any other purpose.
          </p>
          <Typography variant="h6" component="h6" mt={1}>
            Security
          </Typography>
          <p>
            {" "}
            I value your trust in providing us your Personal Information, thus
            we are striving to use commercially acceptable means of protecting
            it. But remember that no method of transmission over the internet,
            or method of electronic storage is 100% secure and reliable, and I
            cannot guarantee its absolute security.
          </p>
          <Typography variant="h6" component="h6" mt={1}>
            Links to Other Sites
          </Typography>
          <p>
            This Service may contain links to other sites. If you click on a
            third-party link, you will be directed to that site. Note that these
            external sites are not operated by me. Therefore, I strongly advise
            you to review the Privacy Policy of these websites. I have no
            control over and assume no responsibility for the content, privacy
            policies, or practices of any third-party sites or services.
          </p>
          <Typography variant="h6" component="h6" mt={1}>
            Children’s Privacy
          </Typography>
          <p>
            These Services do not address anyone under the age of 13. I do not
            knowingly collect personally identifiable information from children
            under 13. In the case I discover that a child under 13 has provided
            me with personal information, I immediately delete this from our
            servers. If you are a parent or guardian and you are aware that your
            child has provided us with personal information, please contact me
            so that I will be able to do necessary actions.
          </p>
          <Typography variant="h6" component="h6" mt={1}>
            Changes to This Privacy Policy
          </Typography>
          <p>
            {" "}
            I may update our Privacy Policy from time to time. Thus, you are
            advised to review this page periodically for any changes. I will
            notify you of any changes by posting the new Privacy Policy on this
            page. These changes are effective immediately after they are posted
            on this page.
          </p>
          <Typography variant="h6" component="h6" mt={1}>
            Contact Us
          </Typography>
          <p>
            If you have any questions or suggestions about my Privacy Policy, do
            not hesitate to contact me.
          </p>
        </div>
      </main>
    </Layout>
  </>
)
