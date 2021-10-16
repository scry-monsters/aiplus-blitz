import React from "react"
import { Image } from "blitz"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import Button from "@material-ui/core/Button"

import programm1 from "./images/programm_logo_1.png"
import programm2 from "./images/programm_logo_2.png"
import programm3 from "./images/programm_logo_3.png"

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: "auto",
  },
})

function NavigationMenu({ menuButton, buttonProps = {}, children }) {
  const classes = useStyles()
  const [isOpen, setOpen] = React.useState(false)

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
              <div className="col-lg-6 col-xl-3">
                <div className="mega-menu__col">
                  <a href="/">
                    <div className="mega-menu__title">ПРОГРАММЫ</div>
                  </a>
                  <ul className="mega-menu__list">
                    <li>
                      <a href="/" className="mega-menu__link">
                        ПОДГОТОВКА В НИШ
                      </a>
                    </li>
                    <li>
                      <a href="/" className="mega-menu__link">
                        ПОДГОТОВКА В РФМШ
                      </a>
                    </li>
                    <li>
                      <a href="/" className="mega-menu__link">
                        ПОДГОТОВКА К ЕНТ
                      </a>
                    </li>
                    <li>
                      <a href="/" className="mega-menu__link">
                        ПОДГОТОВКА В БИЛ (КТЛ)
                      </a>
                    </li>
                    <li>
                      <a href="/" className="mega-menu__link">
                        ПОДГОТОВКА В СПЕЦ ЛИЦЕИ
                      </a>
                    </li>
                    <li>
                      <a href="/" className="mega-menu__link">
                        ОНЛАЙН ОБУЧЕНИЕ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-xl-3">
                <div className="mega-menu__col">
                  <a href="/">
                    <div className="mega-menu__title">ТРЕНЕРЫ</div>
                  </a>
                  <ul className="mega-menu__list">
                    <li>
                      <a href="/" className="mega-menu__link">
                        Кафедра математики
                      </a>
                    </li>
                    <li>
                      <a href="/" className="mega-menu__link">
                        Кафедра русского языка
                      </a>
                    </li>
                    <li>
                      <a href="/" className="mega-menu__link">
                        Кафедра казахского языка
                      </a>
                    </li>
                    <li>
                      <a href="/" className="mega-menu__link">
                        Кафедра английского языка
                      </a>
                    </li>
                    <li>
                      <a href="/" className="mega-menu__link">
                        Кафедра физики
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-xl-3">
                <div className="mega-menu__col">
                  <a href="/">
                    <div className="mega-menu__title">ГОРДОСТЬ ЦЕНТРА</div>
                  </a>
                  <ul className="mega-menu__list">
                    <li>
                      <a href="/" className="mega-menu__link">
                        Поступившие в РФМШ
                      </a>
                    </li>
                    <li>
                      <a href="/" className="mega-menu__link">
                        Поступившие в НИШ
                      </a>
                    </li>
                    <li>
                      <a href="/" className="mega-menu__link">
                        Поступившие в БИЛ (КТЛ)
                      </a>
                    </li>
                    <li>
                      <a href="/" className="mega-menu__link">
                        Успешно сдали ЕНТ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-xl-3">
                <div className="mega-menu__col">
                  <a href="/">
                    <div className="mega-menu__title">ВОПРОСЫ</div>
                  </a>
                  <ul className="mega-menu__list">
                    <li>
                      <a href="/" className="mega-menu__link">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="/" className="mega-menu__link">
                        Задать вопрос
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-xl-3">
                <div className="mega-menu__col">
                  <a href="https://aiplus.kz/ru/blog">
                    <div className="mega-menu__title">Блог</div>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-xl-3">
                <div className="mega-menu__col">
                  <a href="https://aiplus.kz/ru/blog">
                    <div className="mega-menu__title">КОНТАКТЫ</div>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-xl-3">
                <div className="mega-menu__col">
                  <a href="https://aiplus.kz/ru/blog">
                    <div className="mega-menu__title">ОТЗЫВЫ</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="mega-menu__stats">
              <div className="row">
                <div className="col-lg-7">
                  <div className="mega-menu__stats-title">
                    АБСОЛЮТНЫЙ РЕКОРДСМЕН ПО ПОСТУПЛЕНИЮ В НИШ, РФМШ, КТЛ
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="mega-menu__brands">
                    <a
                      href="https://aiplus.kz/ru/programm/podgotovka-v-nish"
                      className="mega-menu__brands-item"
                    >
                      <Image width={50} height={50} src={programm1} alt="" />
                    </a>
                    <a
                      href="https://aiplus.kz/ru/programm/podgotovka-v-rfmsh"
                      className="mega-menu__brands-item"
                    >
                      <Image width={50} height={50} src={programm2} alt="" />
                    </a>
                    <a
                      href="https://aiplus.kz/ru/programm/podgotovka-k-ent"
                      className="mega-menu__brands-item"
                    >
                      <Image width={50} height={50} src={programm3} alt="" />
                    </a>
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
      <SwipeableDrawer
        open={isOpen}
        onClose={handleDrawerClose}
        onOpen={handleDrawerOpen}
        anchor="top"
      >
        {body()}
      </SwipeableDrawer>
    </div>
  )
}

export default NavigationMenu
