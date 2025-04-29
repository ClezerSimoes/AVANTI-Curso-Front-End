
import './App.css'
import Accordion from './components/Accordion/Accordion'
import Clock from './components/clock/clock'
import ContactForm from './components/ContactForm/ContactForm'
import Modal from './components/modal/Modal'

function App() {

  return (
    <>
      <h1>Relógio</h1>
      <Clock></Clock>

      <h2>Modal</h2>
      <Modal></Modal>

      <h2>Formulário de Contato</h2>
      <ContactForm></ContactForm>

      <hr />
      <h2>Accordion</h2>
      <Accordion></Accordion>
    </>
  )
}

export default App
