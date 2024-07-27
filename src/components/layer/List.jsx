import React from 'react'
import { Link } from 'react-router-dom'

const List = ({ href,text }) => {
  return (
    <li>
        <Link className='font-DM text-[#fcf9f9] text-sm hover:text-black transion-all duration-300 font-bold' to={href}>{text}</Link>
    </li>
  )
}

export default List