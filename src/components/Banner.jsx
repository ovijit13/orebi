import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Image from './layer/Image';

const Banner = () => {

  let [active, setActive] = useState(0)

    var settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (prev, next)=>{
               setActive(next);
        },
        appendDots: dots => (
          <div
            style={{
              position:"absolute",
              left:"10%",
              top:"50%",
              transform:"translateY(-50%)"
            }}
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={
              i== active
              ?{
              color: "black",
              font:"bold",
              borderRight: "2px #262626 solid",
              padding:"9px 10px 9px 0"
              }
              :{
              color: "transparent",
              borderRight: "2px white solid",
              padding:"9px 10px 9px 0",
              }

              }
          >
            0{i + 1}
          </div>
        )
      };


  return (
    <div>
         <Slider {...settings}>
      <div className='bg-slate-200 text-center'>
        <Link>
          <Image src="src/assets/banner.jpg" href="#"/>
        </Link>
      </div>
      <div className='bg-slate-200 text-center'>
        <Link>
          <Image src="src/assets/banner.jpg" href="#"/>
        </Link>
      </div>
      <div className='bg-slate-200 text-center'>
        <Link>
          <Image src="src/assets/banner.jpg" href="#"/>
        </Link>
      </div>
      <div className='bg-slate-200 text-center'>
        <Link>
          <Image src="src/assets/banner.jpg" href="#"/>
        </Link>
      </div>
      
    </Slider>
    </div>
  )
}

export default Banner