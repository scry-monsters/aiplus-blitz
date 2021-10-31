import React, { useState } from "react"
import ReactInputMask from "react-input-mask"
// import { useDispatch } from "react-redux";
// import { postProgrammsNish } from "../../redux/slices/programmsNish.slice";

function Form() {
  const [fullName, setFullName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const info = {
      fullName,
      phoneNumber,
    }

    // dispatch(postProgrammsNish(info));

    setFullName("")
    setPhoneNumber("")
  }

  return (
    <div className="container">
      <div className="cta foundation__cta">
        <form onSubmit={handleSubmit} className="cta__wrapper">
          <div className="cta__item control">
            <input
              className="control__input"
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Ваше имя"
              name="fio"
              value={fullName}
            />
          </div>
          <div style={{ padding: "0 10px" }} className="cta__item control">
            <ReactInputMask
              className="control__input"
              onChange={(e) => setPhoneNumber(e.target.value)}
              mask="+7(***) *** ** **"
              type="text"
              formatChars={{
                "*": "[0-9]",
              }}
              placeholder="Номер телефона"
              value={phoneNumber}
            />
          </div>
          <div className="cta__item">
            <button className="button -default cta__button">Проити пробное тестирование</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
