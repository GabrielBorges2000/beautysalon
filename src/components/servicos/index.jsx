import './styles.css'
import Image1 from '../../assets/img_service_1.svg'
import Image2 from '../../assets/img_service_2.svg'
import Image3 from '../../assets/img_service_3.svg'

export function Servicos() {
  return (
    <div className='container_servicos'>

      <div className='title_service'>
        <h2>Serviços</h2>
        <p>Com mais de 10 anos no mercado, o <span>Beautysalon</span> já conquistou clientes de inúmeros países com seus tratamentos exclusivos e totalmente naturais</p>
      </div>

      <div className='cards'>
        <div className='card'>
          <img src={Image1} alt="" />
          <h3>Terapia capilar</h3>
          <p>Terapia completa para couro cabeludo e fios, protegendo todos os tipos de cabelos, inclusive os longos e finos.</p>
        </div>

        <div className='card'>
          <img src={Image2} alt="" />
          <h3>Cortes</h3>
          <p>A nossa equipe é repleta de profissionais renomados, famosos por lançarem tendências com cortes diferenciados e clássicos.</p>
        </div>

        <div className='card'>
          <img src={Image3} alt="" />
          <h3>Tratamentos</h3>
          <p>O beautysalon conta com diversos tratamentos naturais e totalmente veganos, para qualquer tipo de cabelo.</p>
        </div>

      </div>
    </div>
  )
}
