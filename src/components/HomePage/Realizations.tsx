import {useState} from "react";

const realizations = ["/images/Realization-1.jpg", "/images/Realization-2.jpg", "/images/Realization-3.webp"];

const Realizations = () => {
  const [hoveredRealization, setHoveredRealization] = useState<number | null>(null);

  return (
    <div className='w-full'>
      <div className='text-center mt-28'>
        <h1 className='text-4xl font-extralight'>Nasze realizacje</h1>
      </div>
      <div className='mx-auto flex mt-20 overflow-hidden max-w-[1200px]'>
        {realizations.map((realization, key) => (
          <img
            key={key}
            src={realization}
            alt='Realization1 text'
            onMouseEnter={() => setHoveredRealization(key)}
            onMouseLeave={() => setHoveredRealization(null)}
            className={`${hoveredRealization !== null && hoveredRealization === key ? "w-[600px]" : "w-[300px]"} ${hoveredRealization === null ? "w-[400px]" : ""} bg-gray-400 h-[800px] transition-all duration-300 object-cover`}
          />
        ))}
      </div>
    </div>
  );
};

export default Realizations;
