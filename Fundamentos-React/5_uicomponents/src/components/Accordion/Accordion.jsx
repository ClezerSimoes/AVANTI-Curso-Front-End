import { useState } from 'react'
import Styles from "./Accordion.module.css"

const Accordion = () => {

    const [activeIndex, setActiveIndex] = useState(null)

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    const items = [
        { question: "O que é React?", answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, explicabo. Debitis provident, atque hic pariatur cum quasi. Doloribus debitis esse iure sed. Quaerat optio dolorum quam dolore ex, totam itaque." },

        { question: "O que é um Hook?", answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, explicabo. Debitis provident, atque hic pariatur cum quasi. Doloribus debitis esse iure sed. Quaerat optio dolorum quam dolore ex, totam itaque." },

        { question: "O que é useState?", answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, explicabo. Debitis provident, atque hic pariatur cum quasi. Doloribus debitis esse iure sed. Quaerat optio dolorum quam dolore ex, totam itaque." }
    ]



    return (
        <div className={Styles.accordion}>
            {items.map((item, index) => (
            <div key={index} className={`${Styles.item} ${activeIndex === index ? Styles.open : ""}`}>
                <button className={Styles.button} onClick={() => toggleAccordion(index)}>
                    {item.question}
                </button>
                {activeIndex === index && <p className={Styles.answer}>{item.answer}</p> }
            </div>
            ))}
        </div>
    )
}

export default Accordion