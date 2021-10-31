import React from "react"
import Burger from "app/core/components/Burger/Burger"
import NavigationMenu from "app/core/components/NavigationMenu/NavigationMenu"
import Navbar from "./Navbar"
import { MenuItem } from "db"

interface Props {
  menuItems: (MenuItem & {
    children: MenuItem[]
  })[]
}

function Header({ menuItems }: Props) {
  return (
    <header className="header">
      <div className="container d-none d-lg-block">
        <div className="header__top px-5">
          <NavigationMenu menuItems={menuItems} buttonProps={{ color: "#FFF" }} menuButton={Burger}>
            Всё меню
          </NavigationMenu>
          <div className="header__info">
            <a href="tel:+7 (707) 705 33 66" className="header__phone">
              +7 (707) 705 33 66
            </a>
            <ul className="social">
              <li className="social__item ms-3">
                <a
                  href="https://www.facebook.com/aiplus.kz/"
                  target="_blank"
                  rel="noreferrer"
                  className="social__link"
                >
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="social__item ms-3">
                <a
                  href="https://www.instagram.com/aiplus.kz/"
                  target="_blank"
                  rel="noreferrer"
                  className="social__link"
                >
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li className="social__item ms-3">
                <a
                  href="https://www.youtube.com/channel/UCMWQAATR7-gNVHRj8jZTfog"
                  target="_blank"
                  rel="noreferrer"
                  className="social__link"
                >
                  <i className="fab fa-youtube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Navbar menuItems={menuItems} />
    </header>
  )
}

export default Header
