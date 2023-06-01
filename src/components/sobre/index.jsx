import Image from '../../assets/img_sobre.svg'
import './styles.css'

export function Sobre() {
  return (
    <div className="container_sobre" id='sobre' data-aos="fade-left">

      <img src={Image} alt="3 mulheres fazendo pose para tirar uma foto" />

      <div className='text_sobre'>

        <h2>Sobre nós</h2>


        <div>
          <p className='paragraf'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin quis bibendum diam. Sed consequat nisl laoreet eros ultricies pellentesque. Nullam in est porta, pellentesque massa vitae, vehicula risus.
          </p>

          <p className='paragraf'>
            In placerat, felis vitae sodales dictum, lacus quam pretium mi, ut pretium urna turpis eu dui. Vestibulum id ullamcorper nibh. Donec luctus, nunc finibus elementum suscipit, tortor augue vulputate sapien, vitae feugiat enim augue sed.
          </p>

          <p className='paragraf'>
            Quisque id aliquam elit. Suspendisse congue pharetra maximus. Duis rutrum velit a leo euismod dictum. Sed sodales est efficitur arcu tincidunt tincidunt. Curabitur fringilla, risus at feugiat feugiat, nisl nulla tincidunt tellus, elementum elementum lorem nisl eleifend dolor. Nullam eget dui at sem ullamcorper luctus.
          </p>
        </div>
      </div>
      <div className="diver_separator"></div>
    </div>
  )
}
