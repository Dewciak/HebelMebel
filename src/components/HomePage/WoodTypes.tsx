import React from "react";

const WoodTypes = () => {
  const title = "Dąb";
  const description =
    "Jedno z najbardziej cenionych gatunków drewna, charakteryzujące się wysoką trwałością, eleganckim wyglądem oraz wyrazistym usłojeniem. Idealny wybór do produkcji mebli, łączący naturalne piękno z funkcjonalnością.";

  return (
    <div className='flex flex-col-reverse md:flex-row md:max-w-[900px] mx-auto md:mt-40 mt-28 px-3 '>
      <div className='md:w-[50%] space-y-6 mt-16 flex items-center justify-center md:items-start md:justify-start flex-col'>
        <h1 className='text-5xl font-extralight'>{title}</h1>
        <h2 className='text-MyLightGray px-4 md:px-0'>{description}</h2>
        <div className='flex space-x-1'>
          <Cube />
          <Cube />
          <Cube />
          <Cube />
        </div>
      </div>
      <div className='w-[400px] h-[400px] bg-gray-200 md:ml-auto rounded-[30px]'></div>
    </div>
  );
};
function Cube() {
  return (
    <div className='size-[80px] border-gray-100 border-2 flex items-center justify-center'>
      <div className='size-[48px] bg-gray-200 rounded-[5px]'></div>
    </div>
  );
}
export default WoodTypes;
