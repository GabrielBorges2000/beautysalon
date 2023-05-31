/* eslint-disable react/prop-types */
import './styles.css'
import Whatsapp from '../../assets/whatsapp.svg'
import Phone from '../../assets/phone.svg'
import Ping from '../../assets/ping.svg'
import Email from '../../assets/email.svg'

const Contact = ({image, complement}) => {
  return <p><img src={image} alt="" />{complement}</p>
}

export function Contato() {
  return (
    <div className='container_contat' id='contato'>
      <div className='contact_one'>
        <h2>Entre em contato com a gente!</h2>
        <p>Entre em contato com a Beautysalon, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.</p>
        <button>
          <img src={Whatsapp} alt="" />
          Entrar em contato
        </button>
      </div>

      <div className='contact_two'>
        <Contact image={Phone} complement='11 99845-6754' />
        <Contact image={Ping} complement='R. Amauri Souza, 346' />
        <Contact image={Email} complement='contato@beautysalon.com' />
      </div>
    </div>
  )
}
