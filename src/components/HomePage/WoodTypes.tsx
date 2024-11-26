import React, {useState} from "react";

const WoodTypes = () => {
  const woods = [
    {
      name: "Dąb",
      description:
        "Jedno z najbardziej cenionych gatunków drewna, charakteryzujące się wysoką trwałością, eleganckim wyglądem oraz wyrazistym usłojeniem. Idealny wybór do produkcji mebli, łączący naturalne piękno z funkcjonalnością.",
      img: "src/images/Oak.webp",
    },
    {
      name: "Jesion",
      description:
        "Jesion to twarde i elastyczne drewno o jasnej barwie i wyraźnym rysunku słojów. Jest cenione w produkcji mebli i elementów konstrukcyjnych ze względu na trwałość i łatwość obróbki.",
      img: "src/images/Ash.jpg",
    },
    {
      name: "Orzech",
      description:
        "Drewno orzechowe jest cenione za swoją twardość, gęstość i charakterystyczny, ciemnobrązowy kolor z wyraźnym usłojeniem. Jest popularne w produkcji mebli, rzeźbie oraz wykończeniu wnętrz, charakteryzując się eleganckim wyglądem i dużą odpornością na uszkodzenia.",
      img: "src/images/Nut.jpg",
    },
    {
      name: "Sosna",
      description:
        "Drewno sosnowe jest lekkie, elastyczne i łatwe do obróbki, co sprawia, że jest popularne w budownictwie i produkcji mebli. Charakteryzuje się jasną barwą i widocznymi słojami, a także ma przyjemny, naturalny zapach.",
      img: "src/images/Pine.webp",
    },
  ];

  const [selectedWood, setSelectedWood] = useState(woods[0]);

  return (
    <div className='flex flex-col-reverse md:flex-row md:max-w-[900px] mx-auto md:mt-40 mt-28 px-3'>
      <div className='md:w-[50%] space-y-6 mt-16 flex items-center justify-center md:items-start md:justify-start flex-col'>
        <h1 className='text-5xl font-extralight'>{selectedWood.name}</h1>
        <h2 className='text-MyLightGray px-4 md:px-0'>{selectedWood.description}</h2>{" "}
        <div className='flex space-x-1'>
          {woods.map((wood, index) => (
            <Cube key={index} img={wood.img} setWood={() => setSelectedWood(wood)} />
          ))}
        </div>
      </div>
      <div className='w-[400px] h-[400px] bg-gray-200 md:ml-auto rounded-[30px]'>
        <img src={selectedWood.img} alt={selectedWood.name} className='w-full h-full object-cover rounded-[30px]' />
      </div>
    </div>
  );
};

type CubeProps = {
  img: string;
  setWood: () => void;
};

function Cube({img, setWood}: CubeProps) {
  return (
    <div
      className='w-[80px] h-[80px] border-gray-100 border-2 flex items-center justify-center cursor-pointer'
      onMouseEnter={setWood}
      onClick={setWood}
    >
      <img src={img} alt='Wood type' className='w-[48px] h-[48px] object-cover' />
    </div>
  );
}

export default WoodTypes;
