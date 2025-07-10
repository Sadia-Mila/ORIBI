import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Image from "../Image";
import Logo from '../../assets/Logo.png'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="py-15 bg-menu2BG ">
        <Container>
          <Flex>
            <div className="grid grid-cols-[1fr_1fr_1fr_2fr_3fr] gap-x-[100px]">
              <div className="w-[53px]">
                <Heading
                  text={"MENU"}
                  as={"h3"}
                  className={"text-base font-bold text-hoverC mb-4.5"}
                />
                <ul className="flex flex-col gap-y-4">
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
              </div>
               <div className="w-[90px]">
                <Heading
                  text={"SHOP"} as={"h3"}
                  className={"text-base font-bold text-hoverC mb-4.5"}
                />
                <ul className="flex flex-col gap-y-4">
                  <li className="text-base text-normal text-menuC hover:text-hoverC ">
                    Category 1
                  </li>
                  <li className="text-base text-normal text-menuC hover:text-hoverC ">
                   Category 2
                  </li>
                  <li className="text-base text-normal text-menuC hover:text-hoverC ">
                    Category 3
                  </li>
                  <li className="text-base text-normal text-menuC hover:text-hoverC ">
                    Category 4
                  </li>
                  <li className="text-base text-normal text-menuC hover:text-hoverC ">
                    Category 5
                  </li>
                </ul>
              </div>
              <div className=" w-[150px]">
                <Heading
                  text={"HELP"} as={"h3"}
                  className={"text-base font-bold text-hoverC mb-4.5"}
                />
                <ul className="flex flex-col gap-y-4">
                  <li className="text-base text-normal text-menuC hover:text-hoverC ">
                    Privacy Policy
                  </li>
                  <li className="text-base text-normal text-menuC hover:text-hoverC ">
                   Terms & Conditions
                  </li>
                  <li className="text-base text-normal text-menuC hover:text-hoverC ">
                    Special E-shop
                  </li>
                  <li className="text-base text-normal text-menuC hover:text-hoverC ">
                    Shipping
                  </li>
                  <li className="text-base text-normal text-menuC hover:text-hoverC ">
                    Secure Payments
                  </li>
                </ul>
              </div>
              <div className=" w-[260px]">
                <Heading
                  text={"(052) 611-5711 company@domain.com"} as={"h3"}
                  className={"text-base font-bold text-hoverC mb-4.5"}
                />
                <Heading text={'575 Crescent Ave. Quakertown, PA 18951'} as={'p'} className={'text-sm text-[#6D6D6D]'}/>
              </div>
              <div className="gap-x-40">
                <Link to={"/"}>
                <Image imgSrc={Logo} imgAlt={Logo}/>
                </Link>
              </div>
              
            </div>
          </Flex>
        </Container>
        <Container>
          <Flex className={"mt-16 justify-between items-center"}>
            <div className="flex gap-x-4 text-xl ">
              <FaFacebookF />
              <FaLinkedinIn />
              <FaInstagram />

            </div>
            <div className="">
              <Heading text={'2020 Orebi Minimal eCommerce Figma Template by Adveits'} as={'p'} className={"text-sm text-[#6D6D6D]"}/>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Footer;
