import React from "react";

const WoodTypes = () => {
  const title = "Dąb";
  const description =
    "Jedno z najbardziej cenionych gatunków drewna, charakteryzujące się wysoką trwałością, eleganckim wyglądem oraz wyrazistym usłojeniem. Idealny wybór do produkcji mebli, łączący naturalne piękno z funkcjonalnością.";

  return (
    <div className='flex flex-col md:flex-row max-w-[900px] mx-auto mt-40 '>
      <div className='w-[50%] space-y-6 mt-16'>
        <h1 className='text-5xl font-extralight'>{title}</h1>
        <h2 className='text-MyLightGray'>{description}</h2>
        <div className='flex space-x-1'>
          <Cube />
          <Cube />
          <Cube />
          <Cube />
        </div>
      </div>
      <div className='w-[400px] h-[400px] bg-gray-200 ml-auto rounded-[30px]'></div>
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
