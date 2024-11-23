import React from "react";

const WriteButton = () => {
  return (
    <button className='z-10'>
      <div className='w-[142px] h-[52px] border-2 rounded-[10px] border-MyBrown '>
        <div className='w-[142px] h-[52px] flex items-center justify-center text-white rounded-[10px] border-2 border-MyBrown relative top-[5px] left-[5px]'>
          <h1 className='relative bottom-1 right-1'>Napisz</h1>
        </div>
      </div>
    </button>
  );
};

export default WriteButton;
