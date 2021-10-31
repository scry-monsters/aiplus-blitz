import React, { memo, useMemo, useState } from "react"
import classes from "./faq.module.scss"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ReactInputMask from "react-input-mask"
import classNames from "classnames"
import { useDispatch } from "react-redux"
import FaqItem from "./FaqItem"
import { useQuery } from "blitz"
import getFaqs from "app/faqs/queries/getFaqs"

function Faq() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [question, setQuestion] = useState("")
  const [{ faqs }, { isLoading, error }] = useQuery(getFaqs, { skip: 0 })

  const handleSubmit = (e) => {
    e.preventDefault()

    const questions = {
      phoneNumber,
      question,
    }

    // dispatch(postFaq(questions));

    setPhoneNumber("")
    setQuestion("")
  }

  const dispatch = useDispatch()

  // const { data, loading, error } = useQuery(GET_FAQS);

  // const faqs = useMemo(()=>{
  //   return (loading || error || !data?.faqs) ? [] : data.faqs;
  // }, [data, loading, error])

  // console.log("Faqs:", faqs, data, loading, error);

  return (
    <>
      <div className={classNames(classes.faq, "faq-wrapper")}>
        <div className={"container"}>
          <div className={classes.section}>
            <div
              className={classNames(classes.section_heading__title, "faq-section_heading__title")}
            >
              Часто задаваемые вопросы
            </div>
            {!isLoading &&
              !error &&
              faqs.map((item) => (
                <FaqItem
                  key={item.id}
                  id={item.id}
                  title={item.titleRu}
                  description={item.descriptionRu}
                />
              ))}
            <Accordion className={classes.askAQuestion__accardion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <div className={classes.askAQuestion__accardion__title}>Задать вопрос</div>
              </AccordionSummary>
              <AccordionDetails className={classes.accardion__details}>
                <div className={classes.accardion__form}>
                  <form onSubmit={handleSubmit}>
                    <ReactInputMask
                      mask="+7(***) *** ** **"
                      formatChars={{
                        "*": "[0-9]",
                      }}
                      type="text"
                      placeholder="Номер телефона"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={phoneNumber}
                    />
                    <textarea
                      className={classNames(classes.accardion_last__btn, "w-100")}
                      placeholder="Ваш вопрос"
                      onChange={(e) => setQuestion(e.target.value)}
                      value={question}
                    />
                    <button>Задать вопрос</button>
                  </form>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(Faq)
