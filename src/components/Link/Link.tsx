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

import React from "react"
import NextLink, { LinkProps as NextLinkProps } from "next/link"

interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    Omit<NextLinkProps, "href" | "as"> {
  to: NextLinkProps["href"]
  linkAs?: NextLinkProps["as"]
  href?: NextLinkProps["href"]
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  function NextLinkComposed(props, ref) {
    const {
      to,
      linkAs,
      href,
      replace,
      scroll,
      shallow,
      prefetch,
      locale,
      ...other
    } = props

    const isExternal =
      typeof href === "string" &&
      (href.indexOf("http") === 0 || href.indexOf("mailto:") === 0)

    if (isExternal) {
      return <a href={href} ref={ref} {...other} />
    }

    return (
      <NextLink
        href={to}
        prefetch={prefetch}
        as={linkAs}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        passHref
        locale={locale}
      >
        <a ref={ref} {...other} />
      </NextLink>
    )
  }
)

export default Link
