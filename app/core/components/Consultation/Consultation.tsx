import React from "react"
import classes from "./consultation.module.scss"
import InputMask from "react-input-mask"

function Consultation() {
  return (
    <>
      <div className={classes.consultation}>
        <div className={classes.container}>
          <div className={classes.consultation__title}>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</div>
          <div>
            <form>
              <div className={classes.consultation__item}>
                <input type="text" placeholder="Ваше имя" />
                {/*//? * - заменяется числом */}
                <InputMask
                  mask="+7(***) *** ** **"
                  type="text"
                  formatChars={{
                    "*": "[0-9]",
                  }}
                  placeholder="Номер телефона"
                />
                <button>Записаться</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Consultation
