import React, { useEffect } from "react"
import { Link } from "blitz"
import Burger from "app/core/components/Burger/Burger"
import CityDropdown from "app/core/components/CityDropdown/CityDropdown"
import Nav from "./Nav"
import LocalesToggle from "./LocalesToggle"
import { MenuItem } from "db"
import NavigationMenu from "../NavigationMenu/NavigationMenu"

interface Props {
  menuItems: (MenuItem & {
    children: MenuItem[]
  })[]
}

function Navbar({ menuItems }: Props) {
  useEffect(() => {
    if (window !== undefined) {
      const navbar = document.querySelector(".header__main")
      const handleScroll = () => {
        if (navbar) {
          let scroll_top = window.scrollY
          if (scroll_top < 50) {
            navbar.classList.remove("scrolled-down")
            navbar.classList.add("scrolled-up")
          } else {
            navbar.classList.remove("scrolled-up")
            navbar.classList.add("scrolled-down")
          }
        }
      }
      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return (
    <div className="navbar header__main container">
      <div className="navbar-wrapper header__main-wrapper">
        <div className="navbar-content header__main-content">
          <div className="d-flex align-items-center gap-2">
            <NavigationMenu
              menuItems={menuItems}
              buttonProps={{ color: "#000", className: "d-lg-none" }}
              menuButton={Burger}
            ></NavigationMenu>
            <Link href="/">
              <a className="logo header__logo">Aiplus</a>
            </Link>
          </div>
          <Nav menuItems={menuItems} />
          <div className="d-flex align-items-center gap-2">
            <CityDropdown />
            <LocalesToggle />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
