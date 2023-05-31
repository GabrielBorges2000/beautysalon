import Image from '../../assets/img_inicio.svg'
import './styles.css'

export function Inicio() {
  return (
    <div className='container_inicio' id='inicio'>

      <div className='text'>
        <h2>Saúde natural para os seus cabelos</h2>
        <p>Um salão exclusivo em São Paulo, especializado em tratamentos naturais.</p>
        <button type="button">Agendar um  horário</button>
      </div>

      <img src={Image} alt="Uma mulher nosalão escovando o cabelo da cliente" />

    </div>
  )
}
