import React, { memo, useEffect } from "react"
import { Image, useQuery } from "blitz"
import classNames from "classnames"
import logo from "../../assets/images/features_logo-min.png"
import classes from "./Features.module.scss"
import getFeatures from "app/features/queries/getFeatures"

function Features() {
  const [{ features }] = useQuery(getFeatures, {})
  const [selectedItem, setSelectedItem] = React.useState<null | any>(null)

  useEffect(() => {
    setSelectedItem(features[0] || null)
  }, [features])

  useEffect(() => {
    console.log(features)
  }, [features])

  const handleClick = (item) => () => {
    setSelectedItem(item)
  }

  return (
    <div className={classes.features_parent}>
      <div className="container">
        <div className={classes.main_text_container}>
          <div style={{ width: "148px" }}>
            <Image width={138} height={142} src={logo} alt="certificate logo" />
          </div>
          <div style={{ width: "644px" }}>
            <p className={classes.main_text}>НАШИ ОСОБЕННОСТИ</p>
            <p className={classes.main_text_secondary}>
              Мы верим, что не бывает глупых детей. Бывают те, кто не обучался у лучших
              преподавателей.{" "}
            </p>
          </div>
          <div style={{ width: "328px" }}></div>
        </div>
        <div className={classNames(classes.secondary_container, "row")}>
          <div className="col-md-4">
            {features.map((item) => (
              <div className={classes.button_container} key={item.id}>
                <button
                  onClick={handleClick(item)}
                  className={classNames(classes.btn, {
                    [classes.activeFeatureBtn as string]: selectedItem?.id === item.id,
                  })}
                  data-toggle="button"
                  aria-pressed="true"
                >
                  {item.titleRu}
                </button>
              </div>
            ))}
          </div>
          <div className="col-md-8">
            {selectedItem && (
              <div className="row" key={selectedItem.id}>
                <div className="col">
                  <h4
                    className={classNames(
                      classes.featuresItemTitle,
                      "text-center align-items-center"
                    )}
                  >
                    {selectedItem.titleRu}
                  </h4>
                  <div
                    style={{ textAlign: "justify", display: "inline-block" }}
                    className="align-items-center"
                    dangerouslySetInnerHTML={{
                      __html: selectedItem.descriptionRu,
                    }}
                  />
                </div>
                <div className="col">
                  <div className={classNames(classes.boy_img_container, "mt-3")}>
                    <Image
                      width={350}
                      height={350}
                      objectFit="cover"
                      className={classes.boy_img}
                      src={selectedItem.image}
                      alt="boy with a certificate"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Features)
