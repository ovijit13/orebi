import React, { useEffect, useState } from "react";
import Container from "../components/layer/Container";
import Image from "../components/layer/Image";
import List from "./layer/List";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  
  let [show, setShow] = useState(false);
   
  useEffect(()=>{
    
     function size(){
      if(window.innerWidth < 1024 ){
        setShow(false);
       }else{
        setShow(true);
       }
     }

     size();

     window.addEventListener("resize", size)

  },[])

  let bar = () => {
    setShow(!show)
  }

  return (
    <nav className=" bg-slate-200">
      <Container classname="flex items-center justify-between lg:py-7 py-4 relative">
        <div className="logo pl-3">
          <Image href="/" src="src/assets/orebi.png" />
        </div>

            <div
             className={`menu  transition-all duration-500 py-7  lg:py-0 px-4 lg:px-0  absolute z-10 left-0 top-full lg:static flex w-full justify-center ${show ? "opacity-100 visible":"opacity-0 invisible"}`}>
          <ul className="flex flex-col gap-y-2 lg:flex-row md:flex-row items-center gap-x-5">
            <List href="#" text="Home" />
            <List href="#" text="Shop" />
            <List href="#" text="About" />
            <List href="#" text="Contact" />
            <List href="#" text="Journal" />
          </ul>
        </div>

        <div className="pr-3">
        <FaBars onClick={bar} className="lg:hidden" />
        </div>
      </Container>
    </nav>
  );
};

export default Nav;
