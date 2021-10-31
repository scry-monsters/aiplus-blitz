import { Link, Image } from "blitz"
import Layout from "app/core/layouts/Layout"
import Faq from "app/core/components/FAQ/Faq"

import wave1 from "app/core/assets/images/general/wave1.png"
import wave2 from "app/core/assets/images/general/wave2.png"
import glow1 from "app/core/assets/images/general/glow-1.png"

function faq() {
  return (
    <Layout title="FAQ">
      <div className="blog-page faq-page">
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
            <Faq />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default faq
