import React from 'react'
import image from '../../assets/orebi.png'
import { Link } from 'react-router-dom'

const Image = ({href,src,alt}) => {
  return (
   <Link to={href}>
    <picture>
    <img src={src} alt={alt} />
    </picture>
   </Link>
  )
}

export default Image