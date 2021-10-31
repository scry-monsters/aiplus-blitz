import React, { useEffect, useState } from "react"
import { Image } from "blitz"

import wave1 from "app/core/assets/images/general/wave1.png"
import wave2 from "app/core/assets/images/general/wave2.png"
import glow1 from "app/core/assets/images/general/glow-1.png"

import InputMask from "react-input-mask"
import Layout from "app/core/layouts/Layout"
import VideoItem from "app/reviews/components/VideoItem"
import { styles } from "app/reviews/components/styles"

function Reviews() {
  const data = mockData
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [fullName, setFullName] = useState("")

  useEffect(() => {
    setSelectedItem(data[0])
  }, [data])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (phoneNumber && fullName) {
      const mockTest = {
        id: Date.now(),
        name: fullName,
        number: phoneNumber,
      }
      // dispatch(addMockTest(mockTest));

      setPhoneNumber("")
      setFullName("")
    }
  }

  return (
    <Layout title="Home">
      <section className="entry bg-orange-gradient">
        <div style={{ margin: "0 auto 120px auto" }} className="holder__first container">
          <ul className="breadcrumbs">
            <li className="breadcrumbs__item">
              <a href="https://aiplus.kz/ru" className="breadcrumbs__link">
                Главная
              </a>
            </li>
            <li className="breadcrumbs__item">
              <a href="https://aiplus.kz/ru/all-programms" className="breadcrumbs__link">
                Отзывы
              </a>
            </li>
          </ul>
          <h1 className="page__header-title">ОТЗЫВЫ</h1>
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
      <div className="video__container">
        <div className="container">
          <div className="testimons">
            <div className="testimons__btns">
              {data.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="testimons__btn giga__chad text-white"
                >
                  {item.title}
                </button>
              ))}
            </div>
            {selectedItem && (
              <div className="container">
                <div className="testimons-video__container">
                  <div className="testimons__videos">
                    {selectedItem.id === 0
                      ? selectedItem.links.map((item) => (
                          <VideoItem link={item.link} key={item.id} />
                        ))
                      : selectedItem.imgs.map((item) => (
                          <a href={item.link} target="_blank" rel="noreferrer" key={item.id}>
                            <Image
                              // style={{ margin: "5px 5px" }}
                              width={300}
                              height={181}
                              src={item.link}
                              alt="education info"
                            />
                          </a>
                        ))}
                  </div>
                </div>
              </div>
            )}
            <div style={{ marginTop: "50px" }} className="consultation">
              <div className="container inner__consultation">
                <div className="consultation__title">ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ ТЕСТ: </div>
                <div>
                  <form onSubmit={handleSubmit}>
                    <div className="consultation__item">
                      <input
                        type="text"
                        placeholder="Ваше имя"
                        onChange={(e) => setFullName(e.target.value)}
                        value={fullName}
                      />
                      {/*//? * - заменяется числом */}
                      <InputMask
                        mask="+7(***) *** ** **"
                        type="text"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        formatChars={{
                          "*": "[0-9]",
                        }}
                        placeholder="Номер телефона"
                        value={phoneNumber}
                      />
                      <button>Записаться</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{styles}</style>
    </Layout>
  )
}

Reviews.suppressFirstRenderFlicker = true

export default Reviews

const mockData = [
  {
    id: 0,
    title: "ВCЕ ВИДЕО ОТЗЫВЫ",
    links: [
      {
        id: 0,
        link: "https://www.youtube.com/embed/rbX6Nh73Imo",
      },
      {
        id: 1,
        link: "https://www.youtube.com/embed/yz1-XjGfgbo",
      },
      {
        id: 2,
        link: "https://www.youtube.com/embed/6oASfcREL1A",
      },
    ],
  },
  {
    id: 1,
    title: "ВCЕ ФОТО ОТЗЫВЫ",
    imgs: [
      {
        id: 0,
        link: "https://i.pinimg.com/originals/11/1a/03/111a03133d14214539c96e0f657dff1a.png",
      },
      {
        id: 1,
        link: "https://i.pinimg.com/originals/11/1a/03/111a03133d14214539c96e0f657dff1a.png",
      },
      {
        id: 2,
        link: "https://i.pinimg.com/originals/11/1a/03/111a03133d14214539c96e0f657dff1a.png",
      },
    ],
  },
]
