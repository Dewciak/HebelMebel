import React from "react";
import {motion} from "framer-motion";

interface Props {
  textColor: string;
}

const WriteButton = ({textColor}: Props) => {
  return (
    <motion.svg
      width='153'
      height='60'
      viewBox='0 0 150 60'
      initial='hidden'
      animate='visible'
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.95}}
      className='outline-none'
    >
      <motion.rect
        className='stroke-[2px] stroke-linecap-round fill-transparent stroke-black dark:stroke-white'
        width='145'
        height='52'
        rx='10'
        x='6'
        y='6'
        stroke='#000000'
        strokeDasharray='400'
        strokeDashoffset='400'
        animate={{strokeDashoffset: 0}}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      <motion.rect
        className='stroke-[2px] stroke-linecap-round fill-transparent stroke-black dark:stroke-white'
        width='145'
        height='52'
        rx='10'
        x='1'
        y='1'
        strokeDasharray='400'
        strokeDashoffset='-400'
        animate={{strokeDashoffset: 0}}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.text
        x='72.5'
        y='32'
        textAnchor='middle'
        dominantBaseline='middle'
        className='fill-black dark:fill-white'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 2, duration: 0.5}}
      >
        Napisz
      </motion.text>
    </motion.svg>
  );
};

export default WriteButton;
