import React from "react";

const Logo = () => {
  return (
    <a href='/'>
      <img src='/images/Logo.png' className='size-[4rem] block dark:hidden' alt='Logo' />
      <img src='/LogoWhite.png' className='size-[4rem] hidden dark:block' alt='Logo' />
    </a>
  );
};

export default Logo;
