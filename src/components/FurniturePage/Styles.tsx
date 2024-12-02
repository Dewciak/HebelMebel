import React, {useState} from "react";
import {selectedStyle} from "../StateStore";
import {useStore} from "@nanostores/react";

interface Props {
  styles: string[];
}

const Styles = ({styles}: Props) => {
  const $selectedStyle = useStore(selectedStyle);
  const [selectedButtonId, setSelectedButtonId] = useState<number>();
  return (
    <div>
      <ul className='flex space-x-6 mt-10'>
        {styles.map((style, key) => (
          <li>
            <button
              onClick={() => {
                if ($selectedStyle === style) selectedStyle.set(undefined);
                else selectedStyle.set(style);

                if (selectedButtonId === key) setSelectedButtonId(undefined);
                else setSelectedButtonId(key);
              }}
              className={`px-4 py-2 border rounded-full border-black ${selectedButtonId === key ? "border-2 font-medium" : "border"} duration-100 transition-all`}
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
