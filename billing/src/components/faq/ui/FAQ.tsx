import { FaqDataProps } from "../model/types"
import {header} from '../model/data.json';

export const FAQ = ({ faqData }: FaqDataProps) => {
  return (
    <>
    <h1>{header}</h1>
    {faqData.map((faq, index) => (
      <div key={index} className="faq">
        <h3>{faq.question}</h3>
        <p>{faq.answer}</p>
      </div>
    ))} 
    </>
  )
}
