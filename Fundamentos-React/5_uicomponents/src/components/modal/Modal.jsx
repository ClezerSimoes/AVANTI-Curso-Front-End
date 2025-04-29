import { useState, useEffect } from 'react'
import Styles from './Modal.module.css'

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={Styles.container}>
            <button onClick={() => setIsOpen(true)} className={Styles.openButton}>Abrir Modal</button>
            {isOpen && (
                <div className={Styles.modal}>
                    <div className={Styles.modalContent}>
                        <h2>Título do Modal</h2>
                        <p>Conteúdo do Modal</p>
                        <button onClick={() => setIsOpen(false)} className={Styles.closeButton}>Fechar</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal