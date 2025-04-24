import React from "react";

const TextComponent = ({text, description}) => {
    return (
        <>
            <h1>{text}</h1>
            <p>{description}</p>
        </>
    )
}

export default TextComponent