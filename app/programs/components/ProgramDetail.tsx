import React from "react"
import { Link, Image } from "blitz"

//? images
import wave1 from "app/core/assets/images/general/wave1.png"
import wave2 from "app/core/assets/images/general/wave2.png"
import glow1 from "app/core/assets/images/general/glow-1.png"

import Reviews from "app/core/components/Reviews/Reviews"
import StudentsSection from "app/core/components/StudentsSection/StudentsSection"
import Form from "app/core/components/Form/Form"
import Form2 from "app/core/components/Form/Form2"
import { Program, ProgramBenefit, ProgramWhy, Subject } from "db"
import styles from "./styles"
import useLocalizedProp from "app/core/hooks/useLocalizedProp"
import classNames from "classnames"

interface Props {
  data: Pick<
    Program,
    | "id"
    | "titleKz"
    | "titleRu"
    | "shortSchoolNameRu"
    | "shortSchoolNameKz"
    | "fullSchoolNameRu"
    | "fullSchoolNameKz"
    | "subTitleRu"
    | "subTitleKz"
    | "logo"
    | "youtubeVideoId"
    | "videoTitleRu"
    | "videoTitleKz"
    | "factAboutProgramKz"
    | "factAboutProgramRu"
    | "titleWhyRu"
    | "titleWhyKz"
    | "textWhyKz"
    | "textWhyRu"
  > & {
    ProgramWhy: ProgramWhy[]
    ProgramBenefits: ProgramBenefit[]
    ProgramSubject: {
      subject: Subject
    }[]
  }
}

function ProgrammsNish({ data }: Props) {
  const l = useLocalizedProp()
  return (
    <div className="page programms-page">
      <div
        className={classNames("page__header", {
          "bg-green-gradient": [2, 4].includes(data.id),
          "bg-red-gradient": [3].includes(data.id),
          "bg-blue-gradient": [5, 6, 9].includes(data.id),
          "bg-orange-gradient": ![2, 3, 5, 6, 9].includes(data.id),
        })}
      >
        <div className="container">
          <div
            className="entry__pattern skrollable skrollable-between"
            data-0="background-position:0px 0px;"
            data-100000="background-position:0px -40000px;"
          ></div>
          <div className="row no-gutters">
            <div className="col-lg-7">
              <div className="">
                <div className="container section mt-5">
                  <ul className="breadcrumbs">
                    <li className="breadcrumbs__item">
                      <Link href="/">
                        <a className="breadcrumbs__link">Главная</a>
                      </Link>
                    </li>
                    <li className="breadcrumbs__item">
                      <Link href="/programms">
                        <a className="breadcrumbs__link">Программы</a>
                      </Link>
                    </li>
                    <li className="breadcrumbs__item">{l(data, "title")}</li>
                  </ul>
                  <h1 className="page__header-title">{l(data, "title")}</h1>
                  <div className="page__header-text">{l(data, "fullSchoolName")}</div>
                </div>
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
      </div>

      <div className="page__content">
        <div className="container">
          <div className="foundation">
            <div className="foundation__header">
              <div className="foundation__title">{l(data, "subTitle")}</div>
              <div className="foundation__img">
                <Image src={data.logo} alt="" width={370} height={370} />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="page__content_mobile">
          <div className="container__mobile">
            <div className="foundation__mobile">
              <div className="foundation__header">
                <div className="foundation__title">
                  {l(data, 'subTitle')}
                </div>
                <div className="foundation__img">
                  <Image src={data.logo} alt="" width={370} height={370} />
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <Form />

        <div className="container">
          <div className="foundation__info bg-green-gradient">
            <div dangerouslySetInnerHTML={{ __html: l(data, "factAboutProgram") }} />
          </div>
        </div>

        <div className="container">
          <div className="section-heading d-block">
            <div className="section-heading__title -font-300">{l(data, "titleWhy")}</div>
            <div className="section-heading__subtitle mt-1">
              {/* {itemPreparatoryQuestions.body} */}
              {l(data, "textWhy")}
            </div>
            <hr className="mt-4 mb-4" />
          </div>

          <div className="foundation__features">
            <div className="foundation__features-heading">Среди основных преимуществ:</div>
            <div className="row" data-gutter="20" vertical-gutter="20">
              {data.ProgramBenefits &&
                data.ProgramBenefits.map((benefitsItem) => (
                  <div key={benefitsItem.id} className="col-md-6 col-lg-3 mt-4">
                    <div className="foundation__features-item">
                      <div className="foundation__features-img">
                        <Image width={260} height={210} src={benefitsItem.image || ""} alt="" />
                      </div>
                      <div className="foundation__features-divider bg-green-gradient"></div>
                      <div className="foundation__features-content">
                        <div className="foundation__features-title">{l(benefitsItem, "title")}</div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="why bg-gray">
          <div className="container">
            <div className="section-heading d-block">
              <div className="section-heading__title -font-300">Почему мы:</div>
            </div>
            <div className="why__row">
              <ul className="why__list">
                {data.ProgramWhy &&
                  data.ProgramWhy.map((whyItem) => (
                    <li key={whyItem.id} className="why__list-item">
                      {l(whyItem, "text")}
                    </li>
                  ))}
              </ul>
              <div className="why__card">
                <div className="why__card-title bg-green-gradient">Что входит:&nbsp;</div>
                <div className="why__card-text">
                  {`Обучение по ${data.ProgramSubject?.length} предметам:`}
                  <br />
                  {/* //TODO */}
                  {data.ProgramSubject &&
                    data.ProgramSubject.map(({ subject }) => (
                      <li key={subject.id}>{l(subject, "title")}</li>
                    ))}
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-lg-3 "></div>
              <div className="col-md-8 col-lg-9">
                <div className="video">
                  <div className="section-heading d-block">
                    <div className="section-heading__title -font-300 text-left">
                      Отзыв Айши об Айплюс
                    </div>
                  </div>
                  <div className="video__wrapper">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        title="youtube"
                        className="embed-responsive-item"
                        src="https://www.youtube.com/embed/tJ20manUt3s"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Form2 />
        <StudentsSection />
        <Reviews />

        <section className="questions">
          <div className="container">
            <div className="section-heading d-block">
              <div className="section-heading__title">У вас остались вопросы?</div>
              <div className="questions__title">Чем мы можем помочь?</div>
            </div>
            <span className="button questions__button">Бесплатная консультация по программам</span>
            <span className="button questions__button">Бесплатный пробный тест</span>
            <span className="button questions__button">Пробное тестирование</span>
            <span className="button questions__button">Записаться на курс</span>
          </div>
        </section>
      </div>
      <style jsx global>
        {styles}
      </style>
    </div>
  )
}

export default ProgrammsNish
