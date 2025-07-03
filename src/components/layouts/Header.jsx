import Container from "../Container"
import Flex from "../Flex"
import Image from "../Image"
import Logo from '../../assets/Logo.png'
import { HiBars3BottomLeft } from "react-icons/hi2";
import Heading from "../Heading";
import { IoSearchSharp } from "react-icons/io5";
import { FaUser, FaSortDown, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <> 
    <div className="py-7.5 bg-white">
      <Container>
        <Flex>
          <Image imgSrc={Logo} imgAlt={Logo}/>
          <ul className="w-[382px] flex items-center gap-x-5 m-auto">
            <Link to={"/"}>
              <li className="text-base text-normal text-menuC hover:text-hoverC ">Home</li>
            </Link>
            <Link to={"/shop"}>
            <li className="text-base text-normal text-menuC hover:text-hoverC ">Shop</li>
            </Link>
            <Link to={"/about"}>
            <li className="text-base text-normal text-menuC hover:text-hoverC ">About</li>
            </Link>
            <Link to={"/contact"}>
            <li className="text-base text-normal text-menuC hover:text-hoverC ">Contact</li>
            </Link>
            <Link to={"/journal"}>
            <li className="text-base text-normal text-menuC hover:text-hoverC ">Journal</li>
            </Link>
            
            
          </ul>
        </Flex>
      </Container>
    </div>
    <div className="py-6.5 bg-menu2BG ">
       <Container>
        <Flex className={'justify-between'}>
          <div className=" flex items-center gap-x-3">
            <HiBars3BottomLeft className={'text-3xl'} />
            <Heading text={'Shop by Category'} as={"h3"} className={"text-sm text-hoverC"}/>
           
          </div>
          <div className="flex relative">
            <input type="text" placeholder="Search Products" className=" p-4 bg-white w-[600px]"/>
            <IoSearchSharp className="text-xl absolute top-[50%] right-4 -translate-[50%]"/>
          </div>
          <div className="flex items-center gap-x-4 text-lg">
            <div className="flex items-center gap-x-0.5">
              <FaUser />
              <FaSortDown />
            </div>
              <FaShoppingCart />
          </div>
        </Flex>
      </Container>
   
    </div>
    </>
  )
}

export default Header


