import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Image from '../Image'
import specialOffer1 from '../../assets/specialOffer1.png'
import specialOffer2 from '../../assets/specialOffer2.png'
import specialOffer3 from '../../assets/specialOffer3.png'
import specialOffer4 from '../../assets/specialOffer4.png'


import { FaHeart, FaShoppingCart  } from "react-icons/fa";
import { TbGitCompare } from "react-icons/tb";


const SpecialOffer = () => {
  return (
    <>
    <div className="pt-20">
        <Container>
            <div className="">
                    <Heading text={"Special Offers"} as={"h2"} className={"text-[39px] font-bold text-hoverC pb-12"}/>
            </div>
            <div className="flex justify-between items-center gap-x-8 mb-28">
                <div className="relative w-[370px]">
                <Image imgSrc={specialOffer1} imgAlt={specialOffer1}/>
                <button className={"py-2 px-8 bg-hoverC text-sm text-white absolute top-5 left-5 "}>10%</button>  
                <div className="flex justify-between items-center mt-6">
                    <Heading text={"Basic Crew Neck Tee"} as={"h4"} className={"text-xl font-bold text-hoverC"}/>
                    <Heading text={"$44.00"} as={"h4"} className={"text-base text-menuC"}/>
                </div> 
                <Heading text={"Black"} as={"h4"} className={"text-base text-menuC mt-3"}/>

                </div>
                <div className="relative w-[370px]">
                <Image imgSrc={specialOffer2} imgAlt={specialOffer2}/>
                <button className={"py-2 px-8 bg-hoverC text-sm text-white absolute top-5 left-5 "}>New</button> 

                <div className="flex justify-between items-center mt-6">
                    <Heading text={"Basic Crew Neck Tee"} as={"h4"} className={"text-xl font-bold text-hoverC"}/>
                    <Heading text={"$44.00"} as={"h4"} className={"text-base text-menuC"}/>
                </div> 
                <Heading text={"Black"} as={"h4"} className={"text-base text-menuC mt-3"}/>

                </div>
                <div className="relative w-[370px]">
                <Image imgSrc={specialOffer3} imgAlt={specialOffer3}/>
                <button className={"py-2 px-8 bg-hoverC text-sm text-white absolute top-5 left-5 "}>New</button>  
                <div className="flex justify-between items-center mt-6">
                    <Heading text={"Basic Crew Neck Tee"} as={"h4"} className={"text-xl font-bold text-hoverC"}/>
                    <Heading text={"$44.00"} as={"h4"} className={"text-base text-menuC"}/>
                </div> 
                <Heading text={"Black"} as={"h4"} className={"text-base text-menuC mt-3"}/>

                </div>
                <div className="relative w-[370px]">
                <Image imgSrc={specialOffer4} imgAlt={specialOffer4}/>
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

export default SpecialOffer
