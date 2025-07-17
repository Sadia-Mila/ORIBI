import { FaArrowAltCircleRight } from "react-icons/fa";

const NextArrow = (props) => {
    const { onClick } = props;
  return (
    <>
    <div
      className={"absolute top-1/2 right-10 -translate-y-1/2 "} onClick={onClick}>
        <FaArrowAltCircleRight className={"text-4xl text-black"}/>
        </div>
      
    </>
  )
}

export default NextArrow
