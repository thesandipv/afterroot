import React from "react"
import clsx from "clsx"
import { useThemeConfig } from "@docusaurus/theme-common"
import {
  useColorMode,
  useHideableNavbar,
  useNavbarMobileSidebar,
} from "@docusaurus/theme-common/internal"
import NavbarMobileSidebar from "@theme/Navbar/MobileSidebar"
import styles from "./styles.module.css"
function NavbarBackdrop(props) {
  return (
    <div
      role="presentation"
      {...props}
      className={clsx("navbar-sidebar__backdrop", props.className)}
    />
  )
}
export default function NavbarLayout({ children }) {
  const {
    navbar: { hideOnScroll, style },
  } = useThemeConfig()
  const { isDarkTheme } = useColorMode()
  const mobileSidebar = useNavbarMobileSidebar()
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll)
  return (
    <nav
      ref={navbarRef}
      className={clsx(
        "navbar",
        "navbar--fixed-top",
        hideOnScroll && [
          styles.navbarHideable,
          !isNavbarVisible && styles.navbarHidden,
        ],
        {
          "backdrop-blur": !mobileSidebar.shown,
          "bg-neutral-900/75": isDarkTheme,
          "navbar--primary": !isDarkTheme,
          "navbar-sidebar--show": mobileSidebar.shown,
        }
      )}
    >
      {children}
      <NavbarBackdrop onClick={mobileSidebar.toggle} />
      <NavbarMobileSidebar />
    </nav>
  )
}
