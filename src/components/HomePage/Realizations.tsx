import {useState} from "react";

const Realizations = () => {
  const realizations = ["/images/Realizations/1.webp", "/images/Realizations/2.webp", "/images/Realizations/3.webp"];

  const [hoveredRealization, setHoveredRealization] = useState<number | null>(null);

  return (
    <section id='Realizations'>
      <div className='w-full mt-24'>
        <div className='text-center xl:mt-0 mt-14'>
          <h2 className='text-4xl font-medium text-MyDarkBrown dark:text-myDarkText '>Nasze realizacje</h2>
        </div>
        <div className='mx-auto flex mt-20 overflow-hidden max-w-[1200px]  justify-center items-center '>
          {realizations.map((realization, key) => (
            <img
              key={key}
              src={realization}
              alt=''
              onMouseEnter={() => setHoveredRealization(key)}
              onMouseLeave={() => setHoveredRealization(null)}
              className={`${hoveredRealization !== null && hoveredRealization === key ? "lg:w-[600px] w-[80%]" : "lg:w-[300px] w-[150px]"} 
                ${hoveredRealization === null ? "w-[33%] lg:w-[400px]" : ""} 
                bg-gray-400 lg:h-[800px] h-[600px] transition-all duration-300 object-cover`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Realizations;
