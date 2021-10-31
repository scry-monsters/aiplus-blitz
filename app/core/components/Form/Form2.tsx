import React, { useState } from "react"
import ReactInputMask from "react-input-mask"

function Form2() {
  const [fullName, setFullName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  // const dispatch = useDispatch();

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
    <div className="consultation">
      <div className="container">
        <div className="consultation__title">ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ ПРОБНЫЙ ТЕСТ:</div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="consultation__item">
              <input
                type="text"
                placeholder="Ваше имя"
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
              />
              <ReactInputMask
                mask="+7(***) *** ** **"
                type="text"
                formatChars={{
                  "*": "[0-9]",
                }}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Номер телефона"
                value={phoneNumber}
              />
              <button>Записаться</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form2
