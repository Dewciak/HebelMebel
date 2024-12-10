import React from "react";
import ZoomSvg from "./ZoomSvg";
import {selectedStyle} from "./StateStore";
import {useStore} from "@nanostores/react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

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
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-6 mt-6 lg:mt-14'>
      {filteredItems.map((item, key) => (
        <div className=' group w-full max-w-[350px] h-[350px] rounded-[30px] relative' key={key}>
          <div className='absolute top-3 left-3 right-3 flex justify-between items-center px-3'>
            <div className='px-4 py-2 rounded-full border-white text-white border-2'>{item.itemStyle}</div>
            <div className='opacity-0 group-hover:opacity-100 duration-300 transition-opacity'>
              <ZoomSvg />
            </div>
          </div>
          <Zoom>
            <img
              src={item.itemPhotoUrl}
              alt={item.itemStyle}
              className='w-full h-full object-cover rounded-[30px] mr-1'
            />
          </Zoom>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
