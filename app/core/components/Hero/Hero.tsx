import React from "react"
import ReactInputMask from "react-input-mask"
import { Link, Image } from "blitz"

//? images
import wave1 from "app/core/assets/images/general/wave1.png"
import wave2 from "app/core/assets/images/general/wave2.png"
import glow1 from "app/core/assets/images/general/glow-1.png"

import programm_img1 from "app/core/assets/images/programm_img/1555682087_programm_logo.png"
import programm_img2 from "app/core/assets/images/programm_img/1550987420_programm_logo.png"
import programm_img3 from "app/core/assets/images/programm_img/1550988470_programm_logo.png"
import programm_img4 from "app/core/assets/images/programm_img/1555682163_programm_logo.png"
import programm_img5 from "app/core/assets/images/programm_img/1555681988_programm_logo.png"
import programm_img6 from "app/core/assets/images/programm_img/1555682225_programm_logo.png"
import cat4 from "app/core/assets/images/content/cat-4.png"
import mainpage2 from "app/core/assets/images/content/mainpage2.png"

function Hero() {
  return (
    <section className="entry bg-orange-gradient">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-5">
            <Image
              src={mainpage2}
              // src={"https://firebasestorage.googleapis.com/v0/b/chat-angular-e97bc.appspot.com/o/images%2Fmainpage2.png?alt=media"}
              alt=""
              className="entry__img"
              width={460}
              height={490}
            />
          </div>
          <div className="col-lg-7">
            <div className="entry__content">
              <h1 className="entry__title">ЦЕНТР ПОДГОТОВКИ В НИШ, РФМШ, КТЛ</h1>
              <div className="entry__subtitle">
                Рекордсмен по поступлению в НИШ , КТЛ, РФМШ 2020
              </div>
              <div className="entry__cats main_entry__cats">
                <div className="entry__cats-item">
                  <a
                    href="https://aiplus.kz/ru/programm/podgotovka-v-nish"
                    className="entry__cats-link"
                  >
                    <Image width={50} height={50} src={programm_img1} alt="" />
                    <span>Ваша цель ПОСТУПИТЬ В НИШ</span>
                    <div className="entry__cats-overlay">
                      <Image width={50} height={50} src={programm_img1} alt="" />
                      <span>ПОСТУПИТЬ В НИШ</span>
                    </div>
                  </a>
                </div>
                <div className="entry__cats-item">
                  <a
                    href="https://aiplus.kz/ru/programm/podgotovka-v-rfmsh"
                    className="entry__cats-link"
                  >
                    <Image width={50} height={50} src={programm_img2} alt="" />
                    <span>Ваша цель ПОСТУПИТЬ В РФМШ?</span>
                    <div className="entry__cats-overlay">
                      <Image width={50} height={50} src={programm_img2} alt="" />
                      <span>ПОСТУПИТЬ В РФМШ</span>
                    </div>
                  </a>
                </div>
                <div className="entry__cats-item">
                  <a
                    href="https://aiplus.kz/ru/programm/podgotovka-k-ent"
                    className="entry__cats-link"
                  >
                    <Image width={50} height={50} src={programm_img3} alt="" />
                    <span>Ваша цель ПОДГОТОВКА К ЕНТ</span>
                    <div className="entry__cats-overlay">
                      <Image width={50} height={50} src={programm_img3} alt="" />
                      <span>ПОДГОТОВКА К ЕНТ</span>
                    </div>
                  </a>
                </div>
                <div className="entry__cats-item">
                  <Link href="/">
                    <a style={{ cursor: "pointer" }} className="entry__cats-link">
                      <Image width={50} height={50} src={cat4} alt="" />
                      <span>Подготовка к другим целям</span>
                      <div className="entry__cats-overlay">
                        <Image width={50} height={50} src={cat4} alt="" />
                        <span>Другие цели</span>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="entry__cats other_entry__cats" style={{ display: "none" }}>
                <div className="entry__cats-item">
                  <a
                    href="https://aiplus.kz/ru/programm/podgotovka-v-165-litsey"
                    className="entry__cats-link"
                  >
                    <Image width={50} height={50} src={programm_img4} alt="" />
                    <span>Ваша цель ПОСТУПИТЬ В 165 ЛИЦЕЙ</span>
                    <div className="entry__cats-overlay">
                      <Image width={50} height={50} src={programm_img4} alt="" />
                      <span>ПОСТУПИТЬ В 165 ЛИЦЕЙ</span>
                    </div>
                  </a>
                </div>
                <div className="entry__cats-item">
                  <a
                    href="https://aiplus.kz/ru/programm/podgotovka-v-bil-ktl"
                    className="entry__cats-link"
                  >
                    <Image width={50} height={50} src={programm_img5} alt="" />
                    <span>Ваша цель ПОСТУПИТЬ В БИЛ (КТЛ)</span>
                    <div className="entry__cats-overlay">
                      <Image width={50} height={50} src={programm_img5} alt="" />
                      <span>ПОСТУПИТЬ В БИЛ (КТЛ)</span>
                    </div>
                  </a>
                </div>
                <div className="entry__cats-item">
                  <a
                    href="https://aiplus.kz/ru/programm/postupit-v-39-litsey"
                    className="entry__cats-link"
                  >
                    <Image width={50} height={50} src={programm_img6} alt="" />
                    <span>Ваша цель ПОСТУПИТЬ В 39 ЛИЦЕЙ</span>
                    <div className="entry__cats-overlay">
                      <Image width={50} height={50} src={programm_img6} alt="" />
                      <span>ПОСТУПИТЬ В 39 ЛИЦЕЙ</span>
                    </div>
                  </a>
                </div>
                <div className="entry__cats-item">
                  <Link href="/">
                    <a style={{ cursor: "pointer" }} className="entry__cats-link">
                      <Image width={50} height={50} src={cat4} alt="" />
                      <span>Скрыть другие лицей</span>
                      <div className="entry__cats-overlay">
                        <Image width={50} height={50} src={cat4} alt="" />
                        <span>Скрыть другие цели</span>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <form
                className="row"
                data-gutter={15}
                id="index_head_free_subject_form"
                method="post"
                noValidate
              >
                <input type="hidden" name="request_type_id" defaultValue={1} />
                <div className="col-md-4">
                  <div className="control">
                    <input
                      type="text"
                      className="control__input"
                      placeholder="Ваше имя"
                      name="fio"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="control">
                    <ReactInputMask
                      mask="+7(***) *** ** **"
                      formatChars={{
                        "*": "[0-9]",
                      }}
                      type="text"
                      className="control__input"
                      placeholder="Номер телефона"
                      name="phone"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <button type="button" className="button -default w-100">
                    Записаться
                  </button>
                </div>
              </form>
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
      <div
        className="entry__pattern skrollable skrollable-between"
        data-0="background-position:0px 0px;"
        data-100000="background-position:0px -40000px;"
        style={{ backgroundPosition: "0px -93.2px" }}
      />
    </section>
  )
}

export default Hero
