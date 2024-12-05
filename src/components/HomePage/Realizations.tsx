import {useState} from "react";

const realizations = ["/images/Realization-1.jpg", "/images/Realization-2.jpg", "/images/Realization-3.webp"];

const Realizations = () => {
  const [hoveredRealization, setHoveredRealization] = useState<number | null>(null);

  return (
    <section id='Realizations'>
      <div className='w-full'>
        <div className='text-center xl:mt-28 mt-14'>
          <h1 className='text-4xl font-extralight dark:text-myDarkText'>Nasze realizacje</h1>
        </div>
        <div className='mx-auto flex mt-20 overflow-hidden max-w-[1200px]  justify-center items-center '>
          {realizations.map((realization, key) => (
            <img
              key={key}
              src={realization}
              alt='Realization1 text'
              onMouseEnter={() => setHoveredRealization(key)}
              onMouseLeave={() => setHoveredRealization(null)}
              className={`${hoveredRealization !== null && hoveredRealization === key ? "md:w-[600px] w-[80%]" : "lg:w-[300px] w-[150px]"} 
                ${hoveredRealization === null ? "w-[33%] lg:w-[400px]" : ""} 
                bg-gray-400 md:h-[800px] h-[600px] transition-all duration-300 object-cover`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Realizations;
