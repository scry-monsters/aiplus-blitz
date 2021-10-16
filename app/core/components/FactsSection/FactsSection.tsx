import React, { memo, useEffect } from "react"
import { Image, useQuery } from "blitz"
import project_image from "../../assets/images/1550818329_fact_img-min.png"

import classes from "./FactsSection.module.scss"
import getFacts from "app/facts/queries/getFacts"

const FactsSection = () => {
  const [{ facts }, { refetch }] = useQuery(getFacts, {
    orderBy: { orderNumber: "asc" },
  })
  return (
    <div>
      <section className={classes.stats}>
        <div className="container mt-5">
          <div className="row" vertical-gutter="30">
            {facts.map((item) => (
              <div key={item.id} className="col-md-4 col-6">
                <div className={classes.stats__item}>
                  <Image width={80} height={80} src={item.image} alt="" />
                  <div className={classes.stats__text}>{item.titleRu}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default memo(FactsSection)
