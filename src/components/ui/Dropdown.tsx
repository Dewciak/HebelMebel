import React, {useState} from "react";

export const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className='relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className=''>Meble</button>
      <div
        className={`absolute left-0 mt-2 w-40 bg-white rounded-lg  shadow-lg  ${isOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
      >
        <ul className='list-none p-2'>
          <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Stoły</li>
          <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Regały</li>
          <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Komody</li>
          <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Szafki</li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
