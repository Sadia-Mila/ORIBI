import Container from "../Container"
import Heading from "../Heading"
import { FaAngleRight } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import Image from '../Image'
import nArrival1 from '../../assets/nArrival1.png'
import nArrival2 from '../../assets/nArrival2.png'
import nArrival3 from '../../assets/nArrival3.png'
import nArrival4 from '../../assets/nArrival4.png'
import nArrival5 from '../../assets/nArrival5.png'
import nArrival6 from '../../assets/nArrival6.png'
import nArrival7 from '../../assets/nArrival7.png'
import nArrival8 from '../../assets/nArrival8.png'
import specialOffer1 from '../../assets/specialOffer1.png'
import specialOffer2 from '../../assets/specialOffer2.png'
import specialOffer3 from '../../assets/specialOffer3.png'
import specialOffer4 from '../../assets/specialOffer4.png'
import { Link } from "react-router-dom";


const Shop = () => {
  return (
    <>
      <div className="py-[60px]">
        <Container>
          <div className="">
            <Heading
              text={"Available Shopping Products"}
              as={"h2"}
              className={"text-[49px] text-hoverC font-bold"}
            />
            <div className="mb-5">
              <ul className="flex items-center gap-x-2">
                <Link to={'/'}>
                <li className="text-xs text-menuC">Home</li>
                </Link>
                <li className="text-xs text-menuC">
                  <FaAngleRight />
                </li>
                <Link to={'/product'}>
                <li className="text-xs text-menuC">Products</li>
                </Link>
              </ul>
            </div>
            <hr className="h-0.5 bg-[#cbcbcb] mb-8 border-none"/>
          </div>

          <div className="flex justify-between items-center mb-5">
            <div className="w-[25%]">
              <Heading text={"Shop by Category"} as={"h3"} className={"text-[20px] text-hoverC font-bold"}/>
            </div>
              <div className="w-[75%] flex items-center justify-evenly gap-x-5">
                <div className="flex items-center gap-x-3 w-[310px]">
                  <Heading
                    text={"Sort by:"}as={"p"} className={"text-base text-menuC font-normal me-auto"}/>
                    <div className="flex justify-between relative">
                    <input type="text" placeholder="Featured" className="w-[240px] bg-menu2BG py-2 px-3" />
                    <GoTriangleDown className="absolute top-1/2 right-2 -translate-0.5"/>
                    </div>
                </div>
                 <div className="flex items-center gap-x-3 w-[200px]">
                  <Heading
                    text={"Show:"}as={"p"} className={"text-base text-menuC font-normal me-auto"}/>
                    <div className="flex justify-between relative">
                    <input type="text" placeholder="36" className="w-[240px] bg-menu2BG py-2 px-3" />
                    <GoTriangleDown className="absolute top-1/2 right-2 -translate-0.5"/>
                    </div>
                </div>
              </div>
            
          </div>

          <div className="flex justify-between ">
            <div className={" w-[25%] mr-6 "}>
              <ul className="flex justify-between mt-4 p-2 bg-menu2BG ">
                <li>Category 1</li>
                <li>+</li>
              </ul>
              <ul className="flex justify-between mt-4 p-2 bg-menu2BG ">
                <li>Category 2</li>
                <li>+</li>
              </ul>
              <ul className="flex justify-between mt-4 p-2 bg-menu2BG ">
                <li>Category 3</li>
                <li>+</li>
              </ul>
              <ul className="flex justify-between mt-4 p-2 bg-menu2BG ">
                <li>Category 4</li>
                <li>+</li>
              </ul>
              <ul className="flex justify-between mt-4 p-2 bg-menu2BG ">
                <li>Category 5</li>
                <li>+</li>
              </ul>
              <div className="mt-8 flex items-center justify-between">
              <Heading text={"Shop by Color"} as={"h3"} className={"text-[20px] text-hoverC font-bold"}/>
              <GoTriangleDown className=""/>
              </div>
              <div className="">
                <ul className="flex justify-between mt-4 p-2 bg-menu2BG ">
                <li>Color 1</li>
                <li className="w-3 h-3 rounded-full border-none bg-red-800"></li>
              </ul>
              <ul className="flex justify-between mt-4 p-2 bg-menu2BG ">
                <li>Color 2</li>
                <li className="w-3 h-3 rounded-full border-none bg-violet-800"></li>
              </ul>
              <ul className="flex justify-between mt-4 p-2 bg-menu2BG ">
                <li>Color 3</li>
                <li className="w-3 h-3 rounded-full border-none bg-green-800"></li>
              </ul>
              <ul className="flex justify-between mt-4 p-2 bg-menu2BG ">
                <li>Color 4</li>
                <li className="w-3 h-3 rounded-full border-none bg-blue-800"></li>
              </ul>
              <ul className="flex justify-between mt-4 p-2 bg-menu2BG ">
                <li>Color 5</li>
                <li className="w-3 h-3 rounded-full border-none bg-yellow-500"></li>
              </ul>

              </div>
              <div className="mt-8 flex items-center justify-between">
              <Heading text={"Shop by Brand"} as={"h3"} className={"text-[20px] text-hoverC font-bold"}/>
              <GoTriangleDown className=""/>
              </div>
              <div className="">
                <ul className="flex justify-between mt-4 p-2 bg-menu2BG ">
                <li>Brand 1</li>
                <li className="">Addidas</li>
              </ul>
              <ul className="flex justify-between mt-4 p-2 bg-menu2BG ">
                <li>Brand 2</li>
                <li className="">Poma</li>
              </ul>
              <ul className="flex justify-between mt-4 p-2 bg-menu2BG ">
                <li>Brand 3</li>
                <li className="">Capco</li>
              </ul>
              <ul className="flex justify-between mt-4 p-2 bg-menu2BG ">
                <li>Brand 4</li>
                <li className="">Seda</li>
              </ul>
              <ul className="flex justify-between mt-4 p-2 bg-menu2BG ">
                <li>Brand 5</li>
                <li className="">Hive</li>
              </ul>

              </div>

              <div className="mt-8 flex items-center justify-between">
              <Heading text={"Shop by Price"} as={"h3"} className={"text-[20px] text-hoverC font-bold"}/>
              <GoTriangleDown className=""/>
              </div>
              <div className="">
                <ul className="flex justify-between mt-4 p-2 bg-menu2BG ">
                <li>Brand 1</li>
                <li className="">$0.00 - $9.99</li>
              </ul>
              <ul className="flex justify-between mt-4 p-2 bg-menu2BG ">
                <li>Brand 2</li>
                <li className="">$10.00 - $19.99</li>
              </ul>
              <ul className="flex justify-between mt-4 p-2 bg-menu2BG ">
                <li>Brand 3</li>
                <li className="">$20.00 - $29.99</li>
              </ul>
              <ul className="flex justify-between mt-4 p-2 bg-menu2BG ">
                <li>Brand 4</li>
                <li className="">$30.00 - $39.99</li>
              </ul>
              <ul className="flex justify-between mt-4 p-2 bg-menu2BG ">
                <li>Brand 5</li>
                <li className="">$40.00 - $90.99</li>
              </ul>

              </div>
              <div className="mt-8 flex items-center justify-between">
              <Heading text={"Shop by Size"} as={"h3"} className={"text-[20px] text-hoverC font-bold"}/>
              <GoTriangleDown className=""/>
              </div>
              <div className="">
                <ul className="flex justify-between mt-4 p-2 bg-menu2BG ">
                <li>Brand 1</li>
                <li className="">sm-lg</li>
              </ul>
              <ul className="flex justify-between mt-4 p-2 bg-menu2BG ">
                <li>Brand 2</li>
                <li className="">sm-xxl</li>
              </ul>
              <ul className="flex justify-between mt-4 p-2 bg-menu2BG ">
                <li>Brand 3</li>
                <li className="">sm-lg</li>
              </ul>
              <ul className="flex justify-between mt-4 p-2 bg-menu2BG ">
                <li>Brand 4</li>
                <li className="">sm-xxl</li>
              </ul>
              <ul className="flex justify-between mt-4 p-2 bg-menu2BG ">
                <li>Brand 5</li>
                <li className="">sm-xxl</li>
              </ul>

              </div>

            </div>
            <div className="w-[75%]">
              <div className="flex justify-between flex-wrap gap-x-3 gap-y-6">
                <div className="relative w-[300px]">
                <Image imgSrc={nArrival1} imgAlt={nArrival1}/>
                <button className={"py-2 px-8 bg-hoverC text-sm text-white absolute top-5 left-5 "}>10%</button>  
                <div className="flex justify-between items-center mt-6">
                    <Heading text={"Basic Crew Neck Tee"} as={"h4"} className={"text-base font-bold text-hoverC"}/>
                    <Heading text={"$44.00"} as={"h4"} className={"text-base text-menuC"}/>
                </div> 
                <Heading text={"Black"} as={"h4"} className={"text-base text-menuC mt-3"}/>

                </div>
                <div className="relative w-[300px]">
                <Image imgSrc={nArrival2} imgAlt={nArrival2}/>
                <button className={"py-2 px-8 bg-hoverC text-sm text-white absolute top-5 left-5 "}>New</button>  
                <div className="flex justify-between items-center mt-6">
                    <Heading text={"Basic Crew Neck Tee"} as={"h4"} className={"text-base font-bold text-hoverC"}/>
                    <Heading text={"$44.00"} as={"h4"} className={"text-base text-menuC"}/>
                </div> 
                <Heading text={"Black"} as={"h4"} className={"text-base text-menuC mt-3"}/>

                </div>
                <div className="relative w-[300px]">
                <Image imgSrc={nArrival3} imgAlt={nArrival3}/>
                <button className={"py-2 px-8 bg-hoverC text-sm text-white absolute top-5 left-5 "}>New</button>  
                <div className="flex justify-between items-center mt-6">
                    <Heading text={"Basic Crew Neck Tee"} as={"h4"} className={"text-base font-bold text-hoverC"}/>
                    <Heading text={"$44.00"} as={"h4"} className={"text-base text-menuC"}/>
                </div> 
                <Heading text={"Black"} as={"h4"} className={"text-base text-menuC mt-3"}/>

                </div>
                <div className="relative w-[300px]">
                <Image imgSrc={nArrival4} imgAlt={nArrival4}/>
                <button className={"py-2 px-8 bg-hoverC text-sm text-white absolute top-5 left-5 "}>New</button>  
                <div className="flex justify-between items-center mt-6">
                    <Heading text={"Basic Crew Neck Tee"} as={"h4"} className={"text-base font-bold text-hoverC"}/>
                    <Heading text={"$44.00"} as={"h4"} className={"text-base text-menuC"}/>
                </div> 
                <Heading text={"Black"} as={"h4"} className={"text-base text-menuC mt-3"}/>

                </div>
                <div className="relative w-[300px]">
                <Image imgSrc={nArrival5} imgAlt={nArrival5}/>
                <button className={"py-2 px-8 bg-hoverC text-sm text-white absolute top-5 left-5 "}>New</button>  
                <div className="flex justify-between items-center mt-6">
                    <Heading text={"Basic Crew Neck Tee"} as={"h4"} className={"text-base font-bold text-hoverC"}/>
                    <Heading text={"$44.00"} as={"h4"} className={"text-base text-menuC"}/>
                </div> 
                <Heading text={"Black"} as={"h4"} className={"text-base text-menuC mt-3"}/>

                </div>
                <div className="relative w-[300px]">
                <Image imgSrc={nArrival6} imgAlt={nArrival6}/>
                <button className={"py-2 px-8 bg-hoverC text-sm text-white absolute top-5 left-5 "}>New</button> 
              
                <div className="flex justify-between items-center mt-6">
                    <Heading text={"Basic Crew Neck Tee"} as={"h4"} className={"text-base font-bold text-hoverC"}/>
                    <Heading text={"$44.00"} as={"h4"} className={"text-base text-menuC"}/>
                </div> 
                <Heading text={"Black"} as={"h4"} className={"text-base text-menuC mt-3"}/>

                </div>
                <div className="relative w-[300px]">
                <Image imgSrc={nArrival7} imgAlt={nArrival7}/>
                <button className={"py-2 px-8 bg-hoverC text-sm text-white absolute top-5 left-5 "}>New</button>  
                <div className="flex justify-between items-center mt-6">
                    <Heading text={"Basic Crew Neck Tee"} as={"h4"} className={"text-base font-bold text-hoverC"}/>
                    <Heading text={"$44.00"} as={"h4"} className={"text-base text-menuC"}/>
                </div> 
                <Heading text={"Black"} as={"h4"} className={"text-base text-menuC mt-3"}/>

                </div>
                <div className="relative w-[300px]">
                <Image imgSrc={nArrival8} imgAlt={nArrival8}/>
                <button className={"py-2 px-8 bg-hoverC text-sm text-white absolute top-5 left-5 "}>New</button>  
                <div className="flex justify-between items-center mt-6">
                    <Heading text={"Basic Crew Neck Tee"} as={"h4"} className={"text-base font-bold text-hoverC"}/>
                    <Heading text={"$44.00"} as={"h4"} className={"text-base text-menuC"}/>
                </div> 
                <Heading text={"Black"} as={"h4"} className={"text-base text-menuC mt-3"}/>

                </div>
                <div className="relative w-[300px]">
                <Image imgSrc={specialOffer1} imgAlt={specialOffer1}/>
                <button className={"py-2 px-8 bg-hoverC text-sm text-white absolute top-5 left-5 "}>10%</button>  
                <div className="flex justify-between items-center mt-6">
                    <Heading text={"Basic Crew Neck Tee"} as={"h4"} className={"text-base font-bold text-hoverC"}/>
                    <Heading text={"$44.00"} as={"h4"} className={"text-base text-menuC"}/>
                </div> 
                <Heading text={"Black"} as={"h4"} className={"text-base text-menuC mt-3"}/>

                </div>
                <div className="relative w-[300px]">
                <Image imgSrc={specialOffer2} imgAlt={specialOffer2}/>
                <button className={"py-2 px-8 bg-hoverC text-sm text-white absolute top-5 left-5 "}>New</button> 

                <div className="flex justify-between items-center mt-6">
                    <Heading text={"Basic Crew Neck Tee"} as={"h4"} className={"text-base font-bold text-hoverC"}/>
                    <Heading text={"$44.00"} as={"h4"} className={"text-base text-menuC"}/>
                </div> 
                <Heading text={"Black"} as={"h4"} className={"text-base text-menuC mt-3"}/>

                </div>
                <div className="relative w-[300px]">
                <Image imgSrc={specialOffer3} imgAlt={specialOffer3}/>
                <button className={"py-2 px-8 bg-hoverC text-sm text-white absolute top-5 left-5 "}>New</button>  
                <div className="flex justify-between items-center mt-6">
                    <Heading text={"Basic Crew Neck Tee"} as={"h4"} className={"text-base font-bold text-hoverC"}/>
                    <Heading text={"$44.00"} as={"h4"} className={"text-base text-menuC"}/>
                </div> 
                <Heading text={"Black"} as={"h4"} className={"text-base text-menuC mt-3"}/>

                </div>
                <div className="relative w-[300px]">
                <Image imgSrc={specialOffer4} imgAlt={specialOffer4}/>
                <button className={"py-2 px-8 bg-hoverC text-sm text-white absolute top-5 left-5 "}>New</button>  
                <div className="flex justify-between items-center mt-6">
                    <Heading text={"Basic Crew Neck Tee"} as={"h4"} className={"text-base font-bold text-hoverC"}/>
                    <Heading text={"$44.00"} as={"h4"} className={"text-base text-menuC"}/>
                </div> 
                <Heading text={"Black"} as={"h4"} className={"text-base text-menuC mt-3"}/>

                </div>


              </div>

            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Shop
