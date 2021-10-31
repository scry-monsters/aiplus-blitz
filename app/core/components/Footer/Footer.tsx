import { Image, Link } from "blitz"
import React from "react"
import addressIcon1 from "app/core/assets/images/1630661742_address_active_icon_img.png"
import addressIcon2 from "app/core/assets/images/1630661788_address_active_icon_img.png"
import addressIcon3 from "app/core/assets/images/1630661892_address_active_icon_img.png"
import addressIcon4 from "app/core/assets/images/1630661916_address_active_icon_img.png"
import { MenuItem } from "db"
import useLocalizedProp from "app/core/hooks/useLocalizedProp"
import { useAppSelector } from "app/redux/hooks"

interface Props {
  menuItems: (MenuItem & {
    children: MenuItem[]
  })[]
}

function Footer({ menuItems }: Props) {
  const l = useLocalizedProp()
  return (
    <footer className="footer bg-orange-gradient">
      <div className="container">
        <a href="https://aiplus.kz/ru" className="logo -white footer__logo" title="Aiplus">
          Aiplus
        </a>
        <div className="footer__nav row my-4">
          {menuItems.map((item) => (
            <div key={item.id} className="col-lg-6 col-xl-3">
              <div className="mega-menu__col">
                <div className="mega-menu__title">
                  <Link href={item.link}>
                    <a className="mega-menu__link">{l(item, "title")}</a>
                  </Link>
                </div>
                <ul className="mega-menu__list">
                  {!!item.children &&
                    item.children.map((child) => (
                      <li key={child.id}>
                        <Link href={child.link} key={child.id}>
                          <a className="mega-menu__link">{l(child, "title")}</a>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="footer__title">
          Мы растём также быстро, как наши ученики показывают результаты. На сегодня в городе Алматы
          уже 4 филиалов AIPLUS:
        </div>
        <div className="row  justify-content-center mt-4" vertical-gutter={30}>
          <div className="col-md-6 col-lg-3">
            <div className="footer__place">
              <div className="footer__place-icon" style={{ marginRight: 15 }}>
                <Image
                  width={57}
                  height={57}
                  className="address-icon-img"
                  src={addressIcon1}
                  alt=""
                />
              </div>
              <div className="footer__place-title">
                Ул. Абая 68 уг.ул Ауэзова (напротив ТРЦ «Глобус»)..
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer__place">
              <div className="footer__place-icon" style={{ marginRight: 15 }}>
                <Image
                  width={57}
                  height={57}
                  className="address-icon-img"
                  src={addressIcon2}
                  alt=""
                />
              </div>
              <div className="footer__place-title">
                {`Толе би 55, уг.пр Назарбаева(здание "Билайн")`}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer__place">
              <div className="footer__place-icon" style={{ marginRight: 15 }}>
                <Image
                  width={57}
                  height={57}
                  className="address-icon-img"
                  src={addressIcon3}
                  alt=""
                />
              </div>
              <div className="footer__place-title">
                Мамыр 4-й микрорайон, 100А (здание Каспи банка)
                <br />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer__place">
              <div className="footer__place-icon" style={{ marginRight: 15 }}>
                <Image
                  width={57}
                  height={57}
                  className="address-icon-img"
                  src={addressIcon4}
                  alt=""
                />
              </div>
              <div className="footer__place-title">Жетысу 2, 71в (БЦ Нурсат)</div>
            </div>
          </div>
        </div>
        <div className="text-center my-4">
          <a href="tel:+7 (707) 705 33 66" className="button -default footer__phone">
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
      <div className="footer__bottom">
        <div className="container footer__bottom-container">
          <div className="footer__bottom-text">Copyright © 2018 Aiplus.kz. All Rights Reserved</div>
          <div className="footer__bottom-text">Design by Design Studio BIGFOOT</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
