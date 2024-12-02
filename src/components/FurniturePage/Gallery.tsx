import React from "react";
import {MdZoomOutMap} from "react-icons/md";
import ZoomSvg from "../ZoomSvg";
import {selectedStyle} from "../StateStore";
import {useStore} from "@nanostores/react";

interface Props {
  items: {
    itemStyle: string;
    itemPhotoUrl: string;
  }[];
}

const Gallery = ({items}: Props) => {
  const $selectedStyle = useStore(selectedStyle);
  const filteredItems = $selectedStyle ? items.filter((item) => item.itemStyle === $selectedStyle) : items;
  return (
    <div className=''>
      <div className='grid grid-cols-3 gap-6 mt-14'>
        {filteredItems.map((item, key) => (
          <div className='w-full max-w-[350px] h-[350px] rounded-[30px] relative' key={key}>
            <div className='absolute top-3 left-3 right-3 flex justify-between items-center px-3'>
              <div className='px-4 py-2 rounded-full border-white text-white border-2'>{item.itemStyle}</div>
              <button>
                <ZoomSvg />
              </button>
            </div>
            <img
              src={item.itemPhotoUrl}
              alt={item.itemStyle}
              className='w-full h-full object-cover rounded-[30px] mr-1'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
