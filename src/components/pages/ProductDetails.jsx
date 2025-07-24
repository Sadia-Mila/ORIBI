import React, { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import jhuri from "/src/assets/jhuri.png";
import specialOffer4 from "/src/assets/specialOffer4.png";
import specialOffer3 from "/src/assets/specialOffer3.png";
import specialOffer2 from "/src/assets/specialOffer2.png";
import Heading from "../Heading";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";

const ProductDetails = () => {
    const [count, setCount] = useState(1)

//handleDecrement
const handleDecrement = () =>{
    if(count>0)
    setCount(count - 1)
    

}

//handleIncrement
const handleIncrement = () =>{
    if (count < 10)
    setCount(count + 1)
}
  return (
    <>
      <div className="py-6">
        <Container>
          <Flex>
            <div className="flex justify-between flex-wrap gap-x-5 gap-y-6">
              <Image className={"w-[49%]"} imgSrc={jhuri} imgAlt={jhuri} />
              <Image
                className={"w-[49%]"}
                imgSrc={specialOffer4}
                imgAlt={specialOffer4}
              />
              <Image
                className={"w-[49%]"}
                imgSrc={specialOffer3}
                imgAlt={specialOffer3}
              />
              <Image
                className={"w-[49%]"}
                imgSrc={specialOffer2}
                imgAlt={specialOffer2}
              />
            </div>
          </Flex>
          <Heading
            className={"text-bold text-[39px] text-hoverC mt-12"}
            text={"Product"}
            as={"h3"}
          />
          <Flex className={" text-xl text-amber-500 gap-x-1 py-4"}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <p className={"text-menuC text-sm ml-4"}>1 Review</p>
          </Flex>
          <Flex>
            <del className={"text-base text-menuC"}>$88.00</del>
            <span className={"text-xl text-hoverC ml-5"}>$44.00</span>
          </Flex>
          <hr className={"h-0.5 border-none bg-[#D8D8D8] mt-4 mb-2"} />
          <Flex className={"py-4"}>
            <p className={"text-base font-bold uppercase text-hoverC mr-20"}>
              Color :
            </p>
            <div className="flex gap-x-2">
              <div className="w-5 h-5 rounded-full bg-[#979797]"></div>
              <div className="w-5 h-5 rounded-full bg-[#FF8686] scale-[1.2]"></div>
              <div className="w-5 h-5 rounded-full bg-[#7ED321]"></div>
              <div className="w-5 h-5 rounded-full bg-[#B6B6B6]"></div>
              <div className="w-5 h-5 rounded-full bg-[#15CBA5]"></div>
            </div>
          </Flex>
          <Flex>
            <p className={"text-base font-bold uppercase text-hoverC mr-20 mb-6"}>
              Size :
            </p>
            <div className="relative">
              <select
                className={"py-2 px-5 border-1 border-[#F0F0F0] w-[130px] appearance-none" }>
                <option>S</option>
                <option>M</option>
                <option>Lg</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
              <BiSolidDownArrow className={"absolute top-1/2 -translate-y-1/2 right-5"}/>
            </div>
          </Flex>
          <Flex>
            <p className={"text-base font-bold uppercase text-hoverC mr-20"}>
              Quantity :
            </p>
            <div className="py-2 px-1 border-1 border-[#F0F0F0] w-[130px] flex justify-around">
                <button onClick={handleDecrement} className={"font-bold text-lg text-hoverC "}>-</button>
                <h2>{count}</h2>
                <button onClick={handleIncrement} className={"font-bold text-lg text-hoverC "}>+</button>
            </div>
            
          </Flex>
        <Flex className={"my-6"}>
            <p className={"text-base font-bold uppercase text-hoverC mr-20"}>
              Status :
            </p>
            <select  className={"py-2 px-3 border-1 border-[#F0F0F0] w-[130px]" }>
                <option >In Stock</option>
                <option >Out of Stock</option>
            </select>
            
          </Flex>
          <Flex>
            <button className={"py-4 px-10 border-2 border-hoverC text-sm font-bold text-hoverC mr-5" }>Add to Wish List</button>
            <button className={"py-4.5 px-11 bg-hoverC text-sm font-bold text-white mr-5" }>Add to Cart</button>
          </Flex>

        </Container>
      </div>
    </>
  );
};


export default ProductDetails;
