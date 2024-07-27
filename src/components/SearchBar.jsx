import React from 'react'
import Container from "./layer/Container"
import { FaBarsProgress } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";



const SearchBar = () => {
  return (
    <div className='lg:py-5 bg-slate-400'>
    
    <Container classname="flex justify-between lg:items-center flex-row flex-wrap">
      <div className='relative lg:order-1 order-1'>
        <p className='flex items-center gap-x-2 font-DM text-sm text-[#262626]'><FaBarsProgress />Shop by category</p>

        {/* <ul className='absolute top-full left-0 bg-slate-200'>
          <li>aaaaaa</li>
          <li>aaaaaa</li>
          <li>aaaaaa</li>
          <li>aaaaaa</li>
          <li>aaaaaa</li>
          <li>aaaaaa</li>
        </ul> */}
      </div>

      <div className='relative lg:order-2 order-3 w-full lg:w-auto'>
        <input type='search' placeholder='Search Product' className='lg:w-[601px] w-full py-4 px-5 bg-white outline-0' />
        <FaSearch className='absolute right-5 top-1/2 translate-y-[-50%]' />
      </div>

      <div className='flex items-center gap-x-10 lg:order-3 order-2'>
      <div className='flex items-center gap-x-1'>
      <FaUserAlt />
      <MdOutlineArrowDropDown />
      </div>
      
      <div className='pr-3'> <FaShoppingCart /> </div>


      </div>
    </Container>
    
    
    
    
    
    </div>
  )
}

export default SearchBar