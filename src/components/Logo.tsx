import React from "react";

const Logo = () => {
  return (
    <a href='/'>
      <img src='/images/Logo.png' className='size-[4rem] block dark:hidden' />
      <img src='/LogoWhite.png' className='size-[4rem] hidden dark:block' />
    </a>
  );
};

export default Logo;
