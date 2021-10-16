import classes from "./faq.module.scss"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { memo } from "react"

function FaqItem({ id, title, description }) {
  return (
    <Accordion className={classes.accardion__items}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id={`faq-${id}`}
      >
        <div className={classes.faq__title}>{title}</div>
      </AccordionSummary>
      <AccordionDetails className={classes.accardion__details}>
        <div
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </AccordionDetails>
    </Accordion>
  )
}

export default memo(FaqItem)
