import React from 'react'
import './MyCSSComponent.css'

const MyCSSComponent = () => {
    const cssInLine = {
        color: "#F00",
        fontSize: "20px",
        backgroundColor: "#000"
    }

    return (
        <>
            <p style={cssInLine}>Meu parágrafo</p>
        </>
    )
}

export default MyCSSComponent