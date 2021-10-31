import React, { useEffect, useState } from "react"
import { Image } from "blitz"
import InputMask from "react-input-mask"

import wave1 from "app/core/assets/images/general/wave1.png"
import wave2 from "app/core/assets/images/general/wave2.png"
import glow1 from "app/core/assets/images/general/glow-1.png"

import addressIcon1 from "app/core/assets/images/1630661742_address_active_icon_img.png"
import addressIcon2 from "app/core/assets/images/1630661788_address_active_icon_img.png"
import addressIcon3 from "app/core/assets/images/1630661892_address_active_icon_img.png"
import addressIcon4 from "app/core/assets/images/1630661916_address_active_icon_img.png"
import { constactsPageStyles } from "app/contacts/components/styles"
import Layout from "app/core/layouts/Layout"

// import hanIcon from "../../assets/images/content/hanIcon.png"
// import cardMap from '../../assets/images/content/cardMap.png'

// import GMap from ''

function Contacts() {
  //MAPS FOR CARDS
  const [map, setMap] = useState(null)

  // const dispatch = useDispatch();

  //CONSULTATION FORM INPUT STATES
  const [consultationFullName, setConsultationFullName] = useState("")
  const [consultationPhoneNumber, setConsultationPhoneNumber] = useState("")

  //SUGGESTIONS FORM INPUT STATES

  const [suggestionsMail, setSuggestionsMail] = useState("")
  const [suggestionsFullName, setSuggestionsFullName] = useState("")
  const [suggeestionsPhoneNumber, setSuggeestionsPhoneNumber] = useState("")
  const [suggestionsUserText, setSuggestionsUserText] = useState("")

  //SUBMIT HANDLE FOR SUGGESTIONS
  const handleSuggestionsSubmit = (e) => {
    e.preventDefault()
    const suggestionsData = {
      id: Date.now(),
      mail: suggestionsMail,
      fullName: suggestionsFullName,
      phoneNumber: suggeestionsPhoneNumber,
      userText: suggestionsUserText,
    }
    // dispatch(addSuggestionsContacts(suggestionsData))
    setSuggestionsMail("")
    setSuggestionsFullName("")
    setSuggeestionsPhoneNumber("")
    setSuggestionsUserText("")
  }

  //SUBMIT HANDLE FOR CONSULTATION
  const handleConsultationSubmit = (e) => {
    e.preventDefault()
    const consultationData = {
      id: Date.now(),
      consultationFullName,
      consultationPhoneNumber,
    }
    // dispatch(addConsultaionContacts(consultationData));
    setConsultationFullName("")
    setConsultationPhoneNumber("")
  }

  // useEffect(() => {
  //   if (window.DG !== undefined) {
  //     window.DG.then(function () {
  //       const mapInstance = window.DG.map('map_contact', {
  //         center: [54.98, 82.89],
  //         zoom: 13
  //       });
  //       window.DG.marker([54.98, 82.89]).addTo(mapInstance);
  //       setMap(mapInstance);
  //     });
  //   }
  // }, []);
  // console.log(map)

  return (
    <Layout title="Контакты">
      <section className="entry bg-orange-gradient">
        <div style={{ margin: "0 auto 150px auto" }} className="holder__first container">
          <ul className="breadcrumbs">
            <li className="breadcrumbs__item">
              <a href="https://aiplus.kz/ru" className="breadcrumbs__link">
                Главная
              </a>
            </li>
            <li className="breadcrumbs__item">
              <a href="https://aiplus.kz/ru/all-programms" className="breadcrumbs__link">
                Наши Контакты
              </a>
            </li>
          </ul>
          <h1 className="page__header-title">Наши Контакты</h1>
          <div className="first__block">
            <div className="foundation__header consultation__item row mt-3">
              <div className="col-2 align-items-center">
                <button style={{ width: "188px" }}>+7 (707) 705 33 66</button>
              </div>
              <div className="col-4 pt-3 call__center">
                <p>
                  <span className="text-dark">Call Center</span> звонить по любому вопросу
                </p>
              </div>
            </div>
            <div className="col-12 row">
              <div className="social__icons__container col-3 mt-3">
                <p style={{ fontSize: "17px" }}>Мы в социальных сетях</p>
                <ul className="social contacts__social">
                  <li className="social__item">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.facebook.com/aiplus.kz/"
                      className="social__link"
                    >
                      <i className="fab fa-facebook" />
                    </a>
                  </li>
                  <li style={{ margin: "0 10px" }} className="social__item">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.instagram.com/aiplus.kz/"
                      className="social__link"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li className="social__item">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.youtube.com/channel/UCMWQAATR7-gNVHRj8jZTfog"
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
        <div className="waves">
          <div className="waves__item" style={{ height: "200px" }}>
            <Image layout="fill" src={wave1} alt="wave 2" />
          </div>
          <div className="waves__item" style={{ height: "300px" }}>
            <Image layout="fill" src={wave2} alt="wave 1" />
          </div>
        </div>
        <div className="glow">
          <Image layout="fill" src={glow1} alt="glow" />
        </div>
      </section>

      <div className="second__main container">
        <div className="second__block container">
          <div className="second__main__inner row">
            <div className="col-12 d-flex flex-column align-items-center">
              <button>+7 (707) 705 33 66</button>
              <p className="text-center">Call Center звонить по любому вопросу</p>
              <p>Мы социальных сетях</p>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-center">
              <div className="social__item">
                <a
                  rel="noreferrer noopener"
                  href="https://www.facebook.com/aiplus.kz/"
                  className="social__link"
                  target="_blank"
                >
                  <i className="fab fa-facebook" />
                </a>
              </div>
              <div style={{ margin: "0 10px" }} className="social__item">
                <a
                  rel="noreferrer noopener"
                  href="https://www.instagram.com/aiplus.kz/"
                  target="_blank"
                  className="social__link"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <div className="social__item">
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/channel/UCMWQAATR7-gNVHRj8jZTfog"
                  target="_blank"
                  className="social__link"
                >
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="consultation__secondary container">
        <div className="container">
          <div className="consultation__title">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</div>
          <form onSubmit={handleConsultationSubmit} style={{ width: "90%" }}>
            <div style={{ width: "90%" }} className="consultation__item">
              <input
                value={consultationFullName}
                onChange={(e) => setConsultationFullName(e.target.value)}
                type="text"
                placeholder="Ваше имя"
              />
              {/*//? * - заменяется числом */}
              <InputMask
                value={consultationPhoneNumber}
                onChange={(e) => setConsultationPhoneNumber(e.target.value)}
                mask="+7(***) *** ** **"
                type="text"
                formatChars={{
                  "*": "[0-9]",
                }}
                placeholder="Номер телефона"
              />
              <button>ОТПРАВИТЬ</button>
            </div>
          </form>
        </div>
      </div>

      <div className="container__cards container">
        <div className="row holder pb-5 d-flex flex-row pt-2">
          <div className="col-lg-3 col-md-4 col-6 col-sm-6 pt-4">
            <div className="card h-100">
              <div className="card-body h-100">
                <div className="han__icon d-flex align-items-center justify-content-center">
                  <Image
                    width={57}
                    height={57}
                    className="address-icon-img"
                    src={addressIcon1}
                    alt=""
                  />
                </div>
                <p className="text-center mt-4">
                  Ул. Абая 68 уг.ул Ауэзова (напротив ТРЦ «Глобус»)
                </p>
              </div>
              <div className="card__map">{/* <GMap /> */}</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6 col-sm-6 pt-4">
            <div className="card h-100">
              <div className="card-body h-100">
                <div className="han__icon d-flex align-items-center justify-content-center">
                  <Image
                    width={57}
                    height={57}
                    className="address-icon-img"
                    src={addressIcon2}
                    alt=""
                  />
                </div>
                <p className="text-center mt-4">Толе би 73а</p>
              </div>
              <div className="card__map">{/* <GMap /> */}</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6 col-sm-6 pt-4">
            <div className="card h-100">
              <div className="card-body h-100">
                <div className="han__icon d-flex align-items-center justify-content-center">
                  <Image
                    width={57}
                    height={57}
                    className="address-icon-img"
                    src={addressIcon3}
                    alt=""
                  />
                </div>
                <p className="text-center mt-4">Мамыр 4-й микрорайон, 100А (здание Каспи банка)</p>
              </div>
              <div className="card__map">{/* <GMap /> */}</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6 col-sm-6 pt-4">
            <div className="card h-100">
              <div className="card-body h-100">
                <div className="han__icon d-flex align-items-center justify-content-center">
                  <Image
                    width={57}
                    height={57}
                    className="address-icon-img"
                    src={addressIcon4}
                    alt=""
                  />
                </div>
                <p className="text-center mt-4">Жетысу 2, 71в (БЦ Нурсат)</p>
              </div>
              <div className="card__map">{/* <GMap /> */}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container__book d-flex flex-column align-items-center container-fluid">
        <div className="container__book__icon">
          <i className="fas fa-book fa-2x"></i>
        </div>
        <div className="container__book__title">
          <p
            className="text-center"
            style={{
              fontSize: "90px !important",
              marginTop: "10px",
            }}
          >
            Книга жалоб и предложений
          </p>
        </div>
        <div className="container__book__form container">
          <form onSubmit={handleSuggestionsSubmit}>
            <div className="book__form row">
              <div className="consultation__item d-flex flex-column col-md-4">
                <input
                  value={suggestionsMail}
                  onChange={(e) => setSuggestionsMail(e.target.value)}
                  className="control__input"
                  type="text"
                  placeholder="Email"
                />
                <input
                  value={suggestionsFullName}
                  onChange={(e) => setSuggestionsFullName(e.target.value)}
                  className="control__input"
                  type="text"
                  placeholder="Ваше имя"
                />
                <InputMask
                  value={suggeestionsPhoneNumber}
                  onChange={(e) => setSuggeestionsPhoneNumber(e.target.value)}
                  mask="+7(***) *** ** **"
                  formatChars={{
                    "*": "[0-9]",
                  }}
                  className="control__input"
                  type="text"
                  placeholder="Номер телефона"
                />
              </div>
              <div className="consultation__item text__palace col-8">
                <textarea
                  value={suggestionsUserText}
                  onChange={(e) => setSuggestionsUserText(e.target.value)}
                  style={{ padding: "1rem 1.4rem" }}
                  className="-textarea reports__textarea"
                  placeholder="Текстовое сообщение"
                  name="message"
                />
              </div>
            </div>
            <div className="d-flex align-items-center mt-4">
              <button>ОТПРАВИТЬ</button>
            </div>
          </form>
        </div>
      </div>
      <style jsx global>
        {constactsPageStyles}
      </style>
    </Layout>
  )
}

Contacts.suppressFirstRenderFlicker = true
export default Contacts
