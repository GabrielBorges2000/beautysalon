import './styles.css'
import Instagram from '../../assets/instagram.svg'
import Facebook from '../../assets/facebook.svg'
import Youtube from '../../assets/youtube.svg'

export function Footer() {
  return (
    <footer>
      <div>
        <h1>beauty<span>salon</span>.</h1>
        <p>© 2021 Beautysalon.</p>
        <p>Todos os direitos reservados.</p>
      </div>
      <div className='container_two'>

        <a href="https://www.instagram.com">
          <img src={Instagram} alt="" />
        </a>
        <a href="https://www.facebook.com">
          <img src={Facebook} alt="" />
        </a>
        <a href="https://youtube.com">
          <img src={Youtube} alt="" />
        </a>
      </div>
    </footer>
  )
}
