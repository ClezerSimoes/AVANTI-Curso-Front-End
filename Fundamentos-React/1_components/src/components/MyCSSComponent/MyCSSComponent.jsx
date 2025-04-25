import React from 'react'
import Styles from './MyCSSComponent.module.css'

const MyCSSComponent = () => {
    const cssInLine = {
        color: "#F00",
        fontSize: "20px",
        backgroundColor: "#000"
    }

    return (
        <>
            <h1 className={Styles.title}>Título</h1>

            <p style={cssInLine}>Meu parágrafo</p>
        </>
    )
}

export default MyCSSComponent