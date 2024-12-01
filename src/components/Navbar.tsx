import HamburgerMenu from "./HamburgerMenu";
import MobileMenu from "./MobileMenu";

import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className='w-full fixed bg-white z-[100] hidden xl:flex'>
        <div className=' max-w-[2000px] mx-auto grid grid-cols-3 py-6 justify-center px-14 items-center text-MyGray  font-extralight'>
          <ul className='flex text-[1.2rem] text-right space-x-14' id='navbar-links'>
            <li>
              <a href='#Realizations' className='navbar-link'>
                REALIZACJE
              </a>
            </li>
            <li>
              <a href='#AboutUs' className='navbar-link'>
                O&nbsp;NAS
              </a>
            </li>
            <li>
              <a href='#Furnitures' className='navbar-link'>
                MEBLE
              </a>
            </li>
            <li>
              <a href='#Contact' className='navbar-link'>
                KONTAKT
              </a>
            </li>
          </ul>
          <a href='/' className=' w-[5rem] mx-auto'>
            <img src='/images/Logo.png' className='size-[4.5rem]' />
          </a>
          <ul className='flex text-[1.2rem] text-left space-x-14'>
            <li>
              <a href='/tables'>STOŁY</a>
            </li>
            <li>
              <a>KOMODY</a>
            </li>
            <li>
              <a>REGAŁY</a>
            </li>
            <li>
              <a>SZAFKI</a>
            </li>
          </ul>
        </div>
      </div>

      <div className='fixed flex xl:hidden w-full bg-white justify-between px-6 py-1 z-30'>
        <a href='/'>
          <img src='/images/Logo.png' className='size-[4.5rem]' />
        </a>
        <HamburgerMenu />
      </div>
      <MobileMenu />
    </div>
  );
};

export default Navbar;

{
  /* <script>
 document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navbarLinks = document.querySelectorAll('.navbar-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.id;
      const link = document.querySelector(`a[href="#${id}"]`);

      if (entry.isIntersecting) {
        link!.classList.add('font-bold');
      } else {
        link!.classList.remove('font-bold');
      }
    });
  }, {
    threshold: 0.9, 
  });

  sections.forEach((section) => {
    observer.observe(section);
  });

  
  navbarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href')?.substring(1); 
      
      if (targetId) {  
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) { 
          targetSection.scrollIntoView({
            behavior: 'smooth', 
            block: 'center',    
          });
        }
      }
    });
  });
});
</script>

<style>
  a {
    cursor: pointer;
    
  }
  li:hover{
    color: #C2A182;
  }
  .font-bold {
    font-weight: normal;
    color: #C2A182;
  }

  .navbar-link {
    transition: font-weight 0.2s ease;
    z-index: 101;
  }
  
</style> */
}
