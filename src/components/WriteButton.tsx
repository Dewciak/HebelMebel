import React from "react";

interface Props {
  textColor: string;
}
const WriteButton = ({textColor}: Props) => {
  return (
    <button className='z-10'>
      <div className='hover:scale-110 duration-300 w-[142px] h-[52px] border-2 rounded-[10px] border-MyBrown '>
        <div
          className={`hover:scale-105 w-[142px] h-[52px] flex items-center justify-center text-${textColor} rounded-[10px] border-2 border-MyBrown relative top-[5px] left-[5px]`}
        >
          <h1 className='relative bottom-1 right-1'>Napisz</h1>
        </div>
      </div>
    </button>
  );
};

export default WriteButton;
