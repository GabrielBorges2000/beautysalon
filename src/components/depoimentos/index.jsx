/* eslint-disable react/prop-types */
import { Avatar } from '../Avatar'
import './styles.css'
import Avatar2 from '../../assets/avatar_2.png'
import { Ball } from '../../ball'
import Aos from 'aos'

const Card = ({ paragraf, image, name,h, v }) => {
  Aos.init({
    delay: 500,
    duration: 1300
  })
  return (
    <div className='card-depoiment' data-aos={`fade-${h}-${v}`}>
      <p>{paragraf}</p>
      <Avatar className='avatar-edit' image={image} name={name} />
    </div>
  )
}

const imageUrl = 'https://avatars.githubusercontent.com/u/112534393?v=4'

export function Depoimentos() {
  return (
    <div className='container-depoiment' id='depoimento' data-aos="fade-down">
      <div>
        <h2>Depoimento de quem já passou por aqui</h2>
      </div>

      <div className='depoiments-cards'>

        <Card paragraf='Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.' image={imageUrl} name='Gabriel' h={'down'} v={'left'} />

        <Card paragraf='Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.' image={Avatar2} name='John' h={'up'} v={'right'} />

      </div>

      <Ball />
    </div>
  )
}
