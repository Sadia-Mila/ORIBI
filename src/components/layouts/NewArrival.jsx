import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Image from '../Image'
import nArrival1 from '../../assets/nArrival1.png'
import nArrival2 from '../../assets/nArrival2.png'
import nArrival3 from '../../assets/nArrival3.png'
import nArrival4 from '../../assets/nArrival4.png'
import nArrival5 from '../../assets/nArrival5.png'
import nArrival6 from '../../assets/nArrival6.png'
import nArrival7 from '../../assets/nArrival7.png'
import nArrival8 from '../../assets/nArrival8.png'
import { FaHeart, FaShoppingCart  } from "react-icons/fa";
import { TbGitCompare } from "react-icons/tb";


const NewArrival = () => {
  return (
    <>
    <div className="py-5">
        <Container>
            <div className="">
                    <Heading text={"New Arrivals"} as={"h2"} className={"text-[39px] font-bold text-hoverC pb-12"}/>
            </div>
            <div className="flex justify-between items-center gap-x-8 mb-28">
                <div className="relative w-[370px]">
                <Image imgSrc={nArrival1} imgAlt={nArrival1}/>
                <button className={"py-2 px-8 bg-hoverC text-sm text-white absolute top-5 left-5 "}>10%</button>  
                <div className="flex justify-between items-center mt-6">
                    <Heading text={"Basic Crew Neck Tee"} as={"h4"} className={"text-xl font-bold text-hoverC"}/>
                    <Heading text={"$44.00"} as={"h4"} className={"text-base text-menuC"}/>
                </div> 
                <Heading text={"Black"} as={"h4"} className={"text-base text-menuC mt-3"}/>

                </div>
                <div className="relative w-[370px]">
                <Image imgSrc={nArrival2} imgAlt={nArrival2}/>
                <button className={"py-2 px-8 bg-hoverC text-sm text-white absolute top-5 left-5 "}>New</button> 
                <div className="w-full h-[150px] bg-white absolute bottom-20 left-0 p-7">
                    <div className="flex items-center gap-x-3 justify-end mb-2">
                        <Heading text={"Add to Wish List"} as={"p"} className={"text-base text-menuC"}/>
                        <FaHeart />
                    </div>
                    <div className="flex items-center gap-x-3 justify-end mb-2">
                        <Heading text={"Compare"} as={"p"} className={"text-base text-menuC"}/>
                        <TbGitCompare />
                    </div>
                    <div className="flex items-center gap-x-3 justify-end mb-2">
                        <Heading text={"Add to Cart"} as={"p"} className={"text-base text-hoverC"}/>
                        <FaShoppingCart />
                    </div>

                </div> 
                <div className="flex justify-between items-center mt-6">
                    <Heading text={"Basic Crew Neck Tee"} as={"h4"} className={"text-xl font-bold text-hoverC"}/>
                    <Heading text={"$44.00"} as={"h4"} className={"text-base text-menuC"}/>
                </div> 
                <Heading text={"Black"} as={"h4"} className={"text-base text-menuC mt-3"}/>

                </div>
                <div className="relative w-[370px]">
                <Image imgSrc={nArrival3} imgAlt={nArrival3}/>
                <button className={"py-2 px-8 bg-hoverC text-sm text-white absolute top-5 left-5 "}>New</button>  
                <div className="flex justify-between items-center mt-6">
                    <Heading text={"Basic Crew Neck Tee"} as={"h4"} className={"text-xl font-bold text-hoverC"}/>
                    <Heading text={"$44.00"} as={"h4"} className={"text-base text-menuC"}/>
                </div> 
                <Heading text={"Black"} as={"h4"} className={"text-base text-menuC mt-3"}/>

                </div>
                <div className="relative w-[370px]">
                <Image imgSrc={nArrival4} imgAlt={nArrival4}/>
                <button className={"py-2 px-8 bg-hoverC text-sm text-white absolute top-5 left-5 "}>New</button>  
                <div className="flex justify-between items-center mt-6">
                    <Heading text={"Basic Crew Neck Tee"} as={"h4"} className={"text-xl font-bold text-hoverC"}/>
                    <Heading text={"$44.00"} as={"h4"} className={"text-base text-menuC"}/>
                </div> 
                <Heading text={"Black"} as={"h4"} className={"text-base text-menuC mt-3"}/>

                </div>
            </div>        
        </Container>

        <Container>
            <div className="flex justify-between items-center gap-x-8 mb-18">
                <div className="relative w-[370px]">
                <Image imgSrc={nArrival5} imgAlt={nArrival5}/>
                <button className={"py-2 px-8 bg-hoverC text-sm text-white absolute top-5 left-5 "}>New</button>  
                <div className="flex justify-between items-center mt-6">
                    <Heading text={"Basic Crew Neck Tee"} as={"h4"} className={"text-xl font-bold text-hoverC"}/>
                    <Heading text={"$44.00"} as={"h4"} className={"text-base text-menuC"}/>
                </div> 
                <Heading text={"Black"} as={"h4"} className={"text-base text-menuC mt-3"}/>

                </div>
                <div className="relative w-[370px]">
                <Image imgSrc={nArrival6} imgAlt={nArrival6}/>
                <button className={"py-2 px-8 bg-hoverC text-sm text-white absolute top-5 left-5 "}>New</button> 
              
                <div className="flex justify-between items-center mt-6">
                    <Heading text={"Basic Crew Neck Tee"} as={"h4"} className={"text-xl font-bold text-hoverC"}/>
                    <Heading text={"$44.00"} as={"h4"} className={"text-base text-menuC"}/>
                </div> 
                <Heading text={"Black"} as={"h4"} className={"text-base text-menuC mt-3"}/>

                </div>
                <div className="relative w-[370px]">
                <Image imgSrc={nArrival7} imgAlt={nArrival7}/>
                <button className={"py-2 px-8 bg-hoverC text-sm text-white absolute top-5 left-5 "}>New</button>  
                <div className="flex justify-between items-center mt-6">
                    <Heading text={"Basic Crew Neck Tee"} as={"h4"} className={"text-xl font-bold text-hoverC"}/>
                    <Heading text={"$44.00"} as={"h4"} className={"text-base text-menuC"}/>
                </div> 
                <Heading text={"Black"} as={"h4"} className={"text-base text-menuC mt-3"}/>

                </div>
                <div className="relative w-[370px]">
                <Image imgSrc={nArrival8} imgAlt={nArrival8}/>
                <button className={"py-2 px-8 bg-hoverC text-sm text-white absolute top-5 left-5 "}>New</button>  
                <div className="flex justify-between items-center mt-6">
                    <Heading text={"Basic Crew Neck Tee"} as={"h4"} className={"text-xl font-bold text-hoverC"}/>
                    <Heading text={"$44.00"} as={"h4"} className={"text-base text-menuC"}/>
                </div> 
                <Heading text={"Black"} as={"h4"} className={"text-base text-menuC mt-3"}/>

                </div>
            </div>
            

        
        </Container>
        
    </div>
      
    </>
  )
}

export default NewArrival
