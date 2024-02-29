import { useEffect, useState } from "react";
import logo from "../../assets/2jobs.svg";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import Button from "./Button";
//import menuOutline from '../../assets/menu-outline.svg';
import { IonIcon } from '@ionic/react';
import { menu , close } from 'ionicons/icons';
//import Espace from "./BeforeNav/Espace";





const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled , setIsScrolled] = useState(false);



  
  useEffect(()=> {
    const handleScroll = () => {

    setIsScrolled(window.scrollY > 0);
    }

    window.addEventListener('scroll', handleScroll);
    return () => 
    window.removeEventListener("scroll", handleScroll); 
    
  },[])
  
  

  return (
    <>
    
    <nav id='nav-bar' className={`bg-primary w-full ${isScrolled ? 'top-0 fixed transition-all duration-300 z-40' : ''}`}>
      <div className="flex items-center font-medium justify-around">
        <div className="z-40 p-5 md:w-auto w-full flex justify-between  ">
          <img src={logo} alt="2jobs" className="md:cursor-pointer h-9" />
          <div className="text-3xl md:hidden" onClick= {()=>{setOpen(!open) }}>
          <IonIcon icon={open ? close : menu} ></IonIcon>          
          
          </div>
        </div>
        <ul className="md:flex hidden gap-2 items-center">
          <li>
            <Link to="/" className=" /*py-7*/ px-3 inline-block">
              Home
            </Link>
            <Link to="/lancerUnOffre" className=" /*py-7*/ px-3 inline-block">
              A propos
            </Link>
            <Link to="/ContacezNous" className=" /*py-7*/ px-3 inline-block">
            Contact
            </Link>
          </li>
          <li className="z-50">
          <NavLinks />
          </li>
          
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>

        {/* Mobile navbar */}

        <ul className={`
        md:hidden bg-primary absolute w-full h-full bottom-0 py-24 pl-4
        duration-500 ${ open ? 'left-0' : 'left-[-100%]'} `}>
          <li >
            <Link to="/" className=" /*py-7*/ px-3 py-3 block">
                Home
            </Link>
            <Link to="/lancerUnOffre" className=" /*py-7*/ px-3 py-3 block">
              A propos
            </Link>
            <Link to="/ContacezNous" className=" /*py-7*/ px-3 py-3 block">
              Contact
            </Link>
          </li>
          <NavLinks />

          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
    </>
  )
};

export default Navbar;
