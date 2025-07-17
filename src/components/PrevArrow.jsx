import React from 'react'
import { FaArrowAltCircleLeft } from "react-icons/fa";

const PrevArrow = (props) => {
    const { onClick } = props;
  return (
    <>
    <div
      className={"absolute top-1/2 left-10 -translate-y-1/2 z-8"} onClick={onClick}>
        <FaArrowAltCircleLeft className={"text-4xl text-black"}/>
    </div>
      
    </>
  )
}

export default PrevArrow
