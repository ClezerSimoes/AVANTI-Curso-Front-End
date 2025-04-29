import {useState, useEffect} from 'react'
import Styles from './ContactForm.module.css'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        mensagem: ""
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Formulário enviado.", formData)
        alert("Mensagem enviada com sucesso")
        setFormData({nome: "", email: "", mensagem:""})
    }
 
  return (
    <form className={Styles.form} onSubmit={handleSubmit}>
        <input 
            type="text"
            name="nome"
            placeholder='Nome'
            className={Styles.input}
            value={formData.nome}
            onChange={handleChange}
            required={true}
        />

        <input 
            type="email"
            name="email"
            placeholder='E-mail'
            className={Styles.input}
            value={formData.email}
            onChange={handleChange}
            required={true}
        />

        <textarea 
            name="mensagem"
            placeholder='Mensagem'
            className={Styles.textArea}
            value={formData.mensagem}
            onChange={handleChange}
            required={true}
        />

        <button type='submit' className={Styles.button}>Enviar</button>

    </form>
  )
}

export default ContactForm