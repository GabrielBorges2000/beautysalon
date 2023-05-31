/* eslint-disable react/prop-types */
import './styles.css'
import Image1 from '../../assets/img_service_2.svg'
import Image3 from '../../assets/img_service_1.svg'
import Image2 from '../../assets/img_service_3.svg'

const Card = ({image, title, text}) => {
  return (
    <div className='card' id='8'>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export function Servicos() {
  return (
    <div className='container_servicos' id='servico'>

      <div className='title_service'>
        <h2>Serviços</h2>
        <p>Com mais de 10 anos no mercado, o <span>Beautysalon</span> já conquistou clientes de inúmeros países com seus tratamentos exclusivos e totalmente naturais</p>
      </div>

      <div className='cards'>

        <Card image={Image1} title='Terapia capilar' text='Terapia completa para couro cabeludo e fios, protegendo todos os tipos de cabelos, inclusive os longos e finos.' />

        <Card image={Image2} title='Cortes' text='A nossa equipe é repleta de profissionais renomados, famosos por lançarem tendências com cortes diferenciados e clássicos.' />

        <Card image={Image3} title='Tratamentos' text='O beautysalon conta com diversos tratamentos naturais e totalmente veganos, para qualquer tipo de cabelo.' />

      </div>
    </div>
  )
}