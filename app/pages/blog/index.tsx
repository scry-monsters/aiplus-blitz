import React from "react"
import { Link, Image } from "blitz"

import CollapseMenu from "app/core/components/CollapseMenu/CollapseMenu"

import wave1 from "app/core/assets/images/general/wave1.png"
import wave2 from "app/core/assets/images/general/wave2.png"
import glow1 from "app/core/assets/images/general/glow-1.png"

import blog_img1 from "app/core/assets/images/general/blog_img1.png"
import blog_img2 from "app/core/assets/images/general/blog_img2.png"

import Layout from "app/core/layouts/Layout"

function Blog() {
  return (
    <Layout>
      <div className="blog-page">
        <div className="page__header bg-orange-gradient">
          <div className="container">
            <ul className="breadcrumbs">
              <li className="breadcrumbs__item">
                <Link href="/">
                  <a className="breadcrumbs__link">Главная</a>
                </Link>
              </li>
              <li className="breadcrumbs__item">Блог</li>
            </ul>
            <h1 className="page__header-title">Блог</h1>
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
            <div className="row" data-gutter="20">
              <div className="col-md-4 col-lg-3">
                <CollapseMenu data={data} />
              </div>
              <div className="col-md-8 col-lg-9">
                <ul className="blog-list">
                  <form
                    className="row"
                    data-gutter="15"
                    method="post"
                    action="https://aiplus.kz/ru/blog"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      value="VTmYbUTOXgBbrPLoim317ldbGfXcdSWAweVjvCvF"
                    />
                    <input type="hidden" name="lang" value="ru" />
                    <div className="col-md-6">
                      <div className="control">
                        <input
                          type="text"
                          className="control__input"
                          placeholder="Поиск"
                          name="search_word"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <button type="submit" className="button -default w-100">
                        Поиск
                      </button>
                    </div>
                  </form>

                  <li className="blog-list__item">
                    <Link href="/blog/detail-1">
                      <Image
                        width={300}
                        height={300}
                        src={blog_img1}
                        alt=""
                        className="blog-list__img"
                      />
                    </Link>
                    <div className="blog-list__content">
                      <Link href="/blog/detail-1">
                        <a className="blog-list__title">Почему для ребенка важна мотивация?</a>
                      </Link>
                      <div className="blog-list__text"></div>
                    </div>
                    <div className="blog-list__links">
                      <Link href="/blog/detail-1">
                        <a className="button blog-list__link">Подробно</a>
                      </Link>
                    </div>
                  </li>
                  <li className="blog-list__item">
                    <Link href="/blog/detail-2">
                      <Image
                        width={300}
                        height={300}
                        src={blog_img2}
                        alt=""
                        className="blog-list__img"
                      />
                    </Link>
                    <div className="blog-list__content">
                      <Link href="/blog/detail-2">
                        <a className="blog-list__title">Исторический день!</a>
                      </Link>
                      <div className="blog-list__text"></div>
                    </div>
                    <div className="blog-list__links">
                      <Link href="/blog/detail-2">
                        <a className="button blog-list__link">Подробно</a>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const data = [
  {
    id: 0,
    title: "Полезное для родителей",
    children: [
      {
        id: 0,
        title: "Почему для ребенка важна мотивация?",
        link: "/blog/detail-1",
      },
    ],
  },
  {
    id: 1,
    title: "Исторический день в AIPLUS!",
    children: [
      {
        id: 0,
        title: "Исторический день!",
        link: "/blog/detail-2",
      },
    ],
  },
]

export default Blog
