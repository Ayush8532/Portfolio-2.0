"use client";
import React, { useCallback, useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import cn from "classnames";


const Navbar = () => {
  const[activeSection,setActiveSection]=useState('home');
  const[isOpen,setIsOpen]=useState(false);

  useEffect(()=>{
    setActiveSection('home');
  },[])

  const scrollToSection = useCallback((sectionId:string)=>{
    const section=document.getElementById(sectionId);
    if(section){
      section.scrollIntoView({
        behavior:"smooth"
      })
    }
  },[])

  return (
    <div className='fixed top-12 right-6 mx-auto flex flex-col gap-2.5 items-end z-50'>
        <button className='bg-background card-shadow p-3 md:hidden rounded' onClick={()=>setIsOpen((prevVal)=>!prevVal)}>   
            <MenuIcon className='block dark:hidden text-white'/>
            <MenuIcon className='hidden dark:block'/>
        </button>
        <nav className={cn(
          "bg-background card-shadow p-3 rounded md:block duration-300 ease-in-out",{
            "opacity-100":isOpen,
            "opacity-0":!isOpen,
          }
        )}>
          <ul>
            <li>
              <div className={cn("rounded p-1",{
                "bg-primary text-white":activeSection==='home',
              })} onClick={()=>{setActiveSection("home");
                scrollToSection("home");
                setIsOpen(false);
              }}>Home</div>
            </li>
            <li>
              <div className={cn("rounded p-1",{
                "bg-primary text-white":activeSection==='skills',
              })} onClick={()=>{setActiveSection("skills");
                scrollToSection("skills");
                setIsOpen(false);
              }}>Skills</div>
            </li>
            <li>
              <div className={cn("rounded p-1",{
                "bg-primary text-white":activeSection==='projects',
              })} onClick={()=>{setActiveSection("projects");
                scrollToSection("projects");
                setIsOpen(false);
              }}>Projects</div>
            </li>
            <li>
              <div className={cn("rounded p-1",{
                "bg-primary text-white":activeSection==='experience',
              })} onClick={()=>{setActiveSection("experience");
                scrollToSection("experience");
                setIsOpen(false);
              }}>Experience</div>
            </li>
            <li>
              <div className={cn("rounded p-1",{
                "bg-primary text-white":activeSection==='contact',
              })} onClick={()=>{setActiveSection("contact");
                scrollToSection("contact");
                setIsOpen(false);
              }}>Contact</div>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar