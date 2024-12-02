import React from "react";

interface Props {
  textColor: string;
}
const WriteButton = ({textColor}: Props) => {
  return (
    <button className='z-10 mr-5 mt-6 lg:mt-0'>
      <div className=' duration-300 w-[142px] h-[52px] border-2 rounded-[10px] border-black'>
        <div
          className={` w-[142px] h-[52px] flex items-center justify-center text-${textColor} rounded-[10px] border-2 border-black mt-[5px] ml-[5px]`}
        >
          <h1 className='relative bottom-1 right-1 hover:text-MyBrown'>Napisz</h1>
        </div>
      </div>
    </button>
  );
};

export default WriteButton;
