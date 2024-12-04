import React, {useState} from "react";
import {selectedStyle} from "./StateStore";
import {useStore} from "@nanostores/react";

interface Props {
  styles: string[];
}

const Styles = ({styles}: Props) => {
  const $selectedStyle = useStore(selectedStyle);
  const [selectedButtonId, setSelectedButtonId] = useState<number>();
  return (
    <div className='overflow-hidden pl-6'>
      <ul className='flex space-x-6 mt-10 overflow-x-auto pb-4'>
        {styles.map((style, key) => (
          <li>
            <button
              onClick={() => {
                if ($selectedStyle === style) selectedStyle.set(undefined);
                else selectedStyle.set(style);

                if (selectedButtonId === key) setSelectedButtonId(undefined);
                else setSelectedButtonId(key);
              }}
              className={` px-4 py-2 border-[#00000076] rounded-full  ${selectedButtonId === key ? "border-2 font-medium text-black border-black" : "border text-[#00000076]"} duration-100 transition-all `}
            >
              {style}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Styles;
