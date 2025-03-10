import React, {useState} from "react";

const WoodTypes = () => {
  const woods = [
    {
      name: "Dąb",
      description:
        "Jedno z najbardziej cenionych gatunków drewna, charakteryzujące się wysoką trwałością, eleganckim wyglądem oraz wyrazistym usłojeniem. Idealny wybór do produkcji mebli, łączący naturalne piękno z funkcjonalnością.",
      img: "/images/Oak.jpg",
    },
    {
      name: "Jesion",
      description:
        "Jesion to twarde i elastyczne drewno o jasnej barwie i wyraźnym rysunku słojów. Jest cenione w produkcji mebli i elementów konstrukcyjnych ze względu na trwałość i łatwość obróbki.",
      img: "/images/Ash.jpg",
    },
    {
      name: "Orzech",
      description:
        "Drewno orzechowe jest cenione za swoją twardość, gęstość i charakterystyczny, ciemnobrązowy kolor z wyraźnym usłojeniem. Jest popularne w produkcji mebli, rzeźbie oraz wykończeniu wnętrz, charakteryzując się eleganckim ",
      img: "/images/Nut.jpg",
    },
    {
      name: "Sosna",
      description:
        "Drewno sosnowe jest lekkie, elastyczne i łatwe do obróbki, co sprawia, że jest popularne w budownictwie i produkcji mebli. Charakteryzuje się jasną barwą i widocznymi słojami, a także ma przyjemny, naturalny zapach.",
      img: "/images/Pine.webp",
    },
    {
      name: "Buk",
      description:
        "Drewno bukowe to twardy i wytrzymały materiał o ciepłej, złocisto-beżowej barwie. Jego gładka struktura świetnie sprawdza się w produkcji mebli i dekoracji, dodając wnętrzom elegancji i przytulności.",
      img: "/images/Beech.jpg",
    },
    {
      name: "Brzoza",
      description:
        "Brzozowe drewno to subtelny, jasny odcień, który wnosi do wnętrza świeżość i naturalną elegancję. Jego kremowe tony, przełamane delikatnymi, ciepłymi akcentami, doskonale rozświetlają przestrzeń, nadając jej lekkość i przytulność.",
      img: "/images/Birch.jpg",
    },
  ];

  const [selectedWood, setSelectedWood] = useState(woods[0]);

  return (
    <div className='flex flex-col-reverse md:flex-row md:max-w-[900px] mx-auto md:mt-40 mt-28 px-3'>
      <div className='md:w-[50%] space-y-6 mt-16 flex items-center justify-center md:items-start md:justify-start flex-col'>
        <h1 className='text-5xl font-extralight dark:text-myDarkText'>{selectedWood.name}</h1>
        <div className='flex space-x-0 gap-2 '>
          {woods.map((wood, index) => (
            <Wood key={index} img={wood.img} setWood={() => setSelectedWood(wood)} />
          ))}
        </div>
        <h2 className='text-MyGray px-4 md:px-0 h-[150px]'>{selectedWood.description}</h2>{" "}
      </div>
      <div className='lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] bg-gray-200 md:ml-auto rounded-[30px] mx-auto'>
        <img src={selectedWood.img} alt={selectedWood.name} className='w-full h-full object-cover rounded-[30px]' />
      </div>
    </div>
  );
};

type WoodProps = {
  img: string;
  setWood: () => void;
};

function Wood({img, setWood}: WoodProps) {
  return (
    <div onMouseEnter={setWood} onClick={setWood}>
      <img src={img} alt='Wood type' className='w-[40px] h-[40px] object-cover rounded-full cursor-pointer' />
    </div>
  );
}

export default WoodTypes;
