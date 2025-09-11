import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "../../assets/Logo.png";
import { HiBars3BottomLeft } from "react-icons/hi2";
import Heading from "../Heading";
import { IoSearchSharp } from "react-icons/io5";
import { FaUser, FaSortDown, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [showCross, setShowCross] = useState(false);
  const data = useSelector((state) => state.cart.value);
  


  return (
    <>
      <div className="py-7.5 bg-white">
        <Container>
          <Flex>
            <Link to={"/"}>
              <Image imgSrc={Logo} imgAlt={Logo} />
            </Link>

            <ul className="w-[382px] flex items-center gap-x-5 m-auto">
              <Link to={"/"}>
                <li className="text-base text-normal text-menuC hover:text-hoverC ">
                  Home
                </li>
              </Link>
              <Link to={"/shop"}>
                <li className="text-base text-normal text-menuC hover:text-hoverC ">
                  Shop
                </li>
              </Link>
              <Link to={"/about"}>
                <li className="text-base text-normal text-menuC hover:text-hoverC ">
                  About
                </li>
              </Link>
              <Link to={"/contact"}>
                <li className="text-base text-normal text-menuC hover:text-hoverC ">
                  Contact
                </li>
              </Link>
              <Link to={"/journal"}>
                <li className="text-base text-normal text-menuC hover:text-hoverC ">
                  Journal
                </li>
              </Link>
            </ul>
          </Flex>
        </Container>
      </div>
      <div className="py-6.5 bg-menu2BG ">
        <Container>
          <Flex className={"justify-between"}>
            <div className=" flex items-center gap-x-3">
              <HiBars3BottomLeft className={"text-3xl"} />
              <Heading
                text={"Shop by Category"}
                as={"h3"}
                className={"text-sm text-hoverC"}
              />
            </div>
            <div className="flex relative">
              <input
                type="text"
                placeholder="Search Products"
                className=" p-4 bg-white w-[600px]"
              />
              <IoSearchSharp className="text-xl absolute top-[50%] right-4 -translate-[50%]" />
            </div>
            <div className="relative">
              <div className="flex items-center gap-x-4 text-lg ">
                <div className="flex items-center gap-x-0.5">
                  <FaUser />
                  <FaSortDown />
                </div>
                <FaShoppingCart onClick={() => setShowCross(!showCross)} />

                {showCross && (
                  <div
                    onClick={() => setShowCross(!showCross)}
                    className="bg-gray-200 py-5 px-5 w-[650px] absolute top-5 right-0"
                  >
                    <RxCross2 />
                    <ul className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr] gap-x-5 py-2 px-2 border items-center text-sm font-medium mt-3">
                      <li className="text-xl font bold">Title</li>
                      <li className="text-xl font bold">Image</li>
                      <li className="text-xl font bold">Price</li>
                      <li className="text-xl font bold">Quantity</li>
                      <li className="text-xl font bold">Total</li>
                    </ul>
                    {data.map((item) => (
                      <ul className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr] items-center gap-x-5 mt-5 text-sm">
                        <li>{item.productTitle}</li>
                        <li>
                          <img src={item.img} alt="" className="w-[80px]" />
                        </li>
                        <li>{item.price}</li>
                        <li>{item.quantity}</li>
                        <li className="text-bold">{parseInt(item.quantity * item.price.replace("$", ""))}</li>
                        
                      </ul>
                      
                      
                    ))}
                    <hr/>
                    <div className="flex justify-between pr-4">
                      <h2>Sub Total:</h2>
                    <p>0</p>
                    </div>
                    
                  </div>                  
                )}
                
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
