import React from "react";

const Logo = () => {
  return (
    <div className='flex items-center'>
      <a href='/' className='opacity-90'>
        {/* <img src='/images/Logo.webp' className='size-[4rem] block dark:hidden' alt='Logo' /> */}
        <img src='/LogoColor.png' className='size-[4rem] block dark:hidden' alt='Logo' />
        <img src='/LogoColor.png' className='size-[4rem] hidden dark:block' alt='Logo' />
      </a>
      <h1 className='pl-4 font-thin text-xl'>Stolarstwo Komendera</h1>
    </div>
  );
};

export default Logo;
