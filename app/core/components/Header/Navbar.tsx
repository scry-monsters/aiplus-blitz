import React, { useEffect } from "react"
import { Link } from "blitz"
import Burger from "app/core/components/Burger/Burger"
import CityDropdown from "app/core/components/CityDropdown/CityDropdown"
import Nav from "./Nav"

function Navbar() {
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
            <Burger className="d-lg-none" color="black" />
            <Link href="/">
              <a className="logo header__logo">Aiplus</a>
            </Link>
          </div>
          <Nav />
          <div className="d-flex align-items-center gap-2">
            <CityDropdown />
            <div className="lang header__lang">
              <Link href="/kz">
                <a className="lang__link -kz -active">Kz</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
