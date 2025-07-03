import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Ad_1 from "../../assets/Ad_1.png";
import Ad_2 from "../../assets/Ad_2.png";
import Ad_3 from "../../assets/Ad_3.png";
import Heading from "../Heading";

const Adds = () => {
  return (
    <div>
      <>
        <div className="pt-[174px] pb-[128px] bg-white">
          <Container>
            <Flex className={"gap-x-8"}>
              <div className="relative">
                <Image imgSrc={Ad_1} imgAlt={Ad_1} className={""} />         
               
               <div className="absolute bottom-12 left-14">
                    <Heading text={"Phones Sale"} as={"h1"} className={"text-[39px] font-bold text-hoverC mb-3"}/>
                    <div className=" flex items-center">
                        <Heading text={"Up to"} as={"p"} className={"text-base text-[#6D6D6D] mr-2"}/>
                        <Heading text={"50%"} as={"h1"} className={"text-[40px] font-bold text-hoverC"}/>
                        <Heading text={"sale for all phones!"} as={"p"} className={"text-base text-[#6D6D6D] ml-2"}/>

                    </div>
                        <button className={"py-4 px-15 bg-hoverC text-white text-sm font-bold mt-5"}>Shop Now</button>
                
                </div>
            </div>
                <div className="flex flex-col gap-y-8">
                <div className="relative">
                  <Image imgSrc={Ad_2} imgAlt={Ad_2} />
                    <div className="absolute bottom-14 left-8">
                    <Heading text={"Electronics Sale"} as={"h1"} className={"text-[39px] font-bold text-hoverC mb-3"}/>
                    <div className=" flex items-center">
                        <Heading text={"Up to"} as={"p"} className={"text-base text-[#6D6D6D] mr-1"}/>
                        <Heading text={"70%"} as={"h1"} className={"text-[40px] font-bold text-hoverC"}/>
                        <Heading text={"sale for all electronics!"} as={"p"} className={"text-base text-[#6D6D6D] ml-1"}/>

                    </div>
                        <button className={"py-4 px-15 bg-hoverC text-white text-sm font-bold mt-5"}>Shop Now</button>
                
                    </div>
                </div>
                <div className="relative">
                  <Image imgSrc={Ad_3} imgAlt={Ad_3} />
                   <div className="absolute bottom-14 left-8">
                    <Heading text={"Furniture Offer"} as={"h1"} className={"text-[39px] font-bold text-hoverC mb-3"}/>
                    <div className=" flex items-center">
                        <Heading text={"Up to"} as={"p"} className={"text-base text-[#6D6D6D] mr-1"}/>
                        <Heading text={"50%"} as={"h1"} className={"text-[40px] font-bold text-hoverC"}/>
                        <Heading text={"sale for all furniture items!"} as={"p"} className={"text-base text-[#6D6D6D] ml-1"}/>

                    </div>
                        <button className={"py-4 px-15 bg-hoverC text-white text-sm font-bold mt-5"}>Shop Now</button>
                
                    </div>
                 
                </div>
              </div>
            </Flex>
          </Container>
        </div>
      </>
    </div>
  );
};

export default Adds;
