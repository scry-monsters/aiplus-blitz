import React from "react"
import { Image, Link } from "blitz"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
// import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import Drawer from "@material-ui/core/Drawer"
import Button from "@material-ui/core/Button"

import programm1 from "./images/programm_logo_1.png"
import programm2 from "./images/programm_logo_2.png"
import programm3 from "./images/programm_logo_3.png"
import { MenuItem } from "db"
import useLocalizedProp from "app/core/hooks/useLocalizedProp"
import { FormattedMessage } from "react-intl"

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: "auto",
  },
})

interface Props {
  menuItems: (MenuItem & {
    children: MenuItem[]
  })[]
  menuButton: (props) => JSX.Element
  buttonProps?: any
}

const NavigationMenu: React.FC<Props> = ({
  menuButton,
  buttonProps = {},
  children,
  menuItems = [],
}) => {
  const classes = useStyles()
  const [isOpen, setOpen] = React.useState(false)
  const l = useLocalizedProp()

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const body = () => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: isOpen,
      })}
      role="presentation"
    >
      <div className="mega-menu">
        <div className="" role="document">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            onClick={handleDrawerClose}
            aria-label="Close"
          >
            ✕
          </button>
          <div className="mega-menu__container">
            <div className="mega-menu__logo">
              <a href="/" className="mega-menu__logo">
                {" "}
              </a>
            </div>
            <div className="row" data-gutter="15" vertical-gutter="30">
              {menuItems.map((item) => (
                <div key={item.id} className="col-lg-6 col-xl-3">
                  <div className="mega-menu__col">
                    <Link href={item.link}>
                      <a className="mega-menu__title">{l(item, "title")}</a>
                    </Link>
                    <ul className="mega-menu__list">
                      {item.children.map((child) => (
                        <li key={child.id}>
                          <Link href={child.link}>
                            <a className="mega-menu__link">{l(child, "title")}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="mega-menu__stats">
              <div className="row">
                <div className="col-lg-7">
                  <div className="mega-menu__stats-title">
                    <FormattedMessage
                      defaultMessage="АБСОЛЮТНЫЙ РЕКОРДСМЕН ПО ПОСТУПЛЕНИЮ В НИШ, РФМШ, КТЛ"
                      id="programs.absoluteRecordTitle"
                      description="Absolute records by programs title"
                    />
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="mega-menu__brands">
                    <Link href="/programs/2">
                      <a className="mega-menu__brands-item">
                        <Image width={50} height={50} src={programm1} alt="" />
                      </a>
                    </Link>
                    <Link href="/programs/3">
                      <a className="mega-menu__brands-item">
                        <Image width={50} height={50} src={programm2} alt="" />
                      </a>
                    </Link>
                    <Link href="/programs/4">
                      <a className="mega-menu__brands-item">
                        <Image width={50} height={50} src={programm3} alt="" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-5 mb-3">
              <a href="/" className="button -default">
                Записаться на пробный тест
              </a>
            </div>
            <div className="text-center mb-2">
              <a href="tel:+7 (707) 705 33 66" className="mega-menu__phone">
                +7 (707) 705 33 66
              </a>
            </div>
            <ul className="social footer__social">
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
    </div>
  )

  const MenuButton = menuButton || Button

  return (
    <div>
      <MenuButton {...buttonProps} onClick={handleDrawerOpen}>
        {children}
      </MenuButton>
      <Drawer open={isOpen} onClose={handleDrawerClose} anchor="top">
        {body()}
      </Drawer>
    </div>
  )
}

export default NavigationMenu
