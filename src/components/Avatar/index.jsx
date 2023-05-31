/* eslint-disable react/prop-types */
import './styles.css'

export function Avatar({ image, name }) {

  return (
    <div className='avatar'>
      <img src={image} alt=""  />
      <p>{name}</p>
    </div>
  )
}
