import React from 'react'
import Image from '../Image'
import bannerBg from '../../assets/bannerBg.png'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import bannerSideBtn from '../../assets/bannerSideBtn.png'

const Banner = () => {
  return (
    <div>
        <>
        <div className="">
            <Image imgSrc={bannerBg} imgAlt={bannerBg} className={'bg-no-repeat bg-cover bg-center relative'}/>
            <Container>
                <Flex>
                    <div className="absolute top-[280px] left-[300px]">
                        <Heading text={"Final Offer"} as={"h1"} className={"text-[49px] font-bold text-hoverC mb-5"}/>
                        <div className=" flex items-center">
                        <Heading text={"Up to"} as={"p"} className={"text-base text-[#6D6D6D] mr-3"}/>
                        <Heading text={"50%"} as={"h1"} className={"text-[40px] font-bold text-hoverC"}/>
                        <Heading text={"sale for all furniture items!"} as={"p"} className={"text-base text-[#6D6D6D] ml-3"}/>

                        </div>
                        <button className={"py-4 px-15 bg-hoverC text-white text-sm font-bold mt-9"}>Shop Now</button>
                    </div>
                </Flex>
                <div className="">
                    <Image imgSrc={bannerSideBtn} imgAlt={bannerSideBtn} className={"absolute top-[340px] left-[180px]"}/>
                </div>

            </Container>
        </div>
            

      
        
        
        </>
      
    </div>
  )
}

export default Banner
