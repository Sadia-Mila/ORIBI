import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import { GoTriangleDown } from "react-icons/go";
import Product from "../Product";
import hamalDista from "/src/assets/hamalDista.png"
import specialOffer3 from '/src/assets/specialOffer3.png'
import specialOffer2 from '/src/assets/specialOffer2.png'
import specialOffer1 from '/src/assets/specialOffer1.png'
import specialOffer4 from '/src/assets/specialOffer4.png'
import specialOffer5 from '/src/assets/specialOffer5.png'
import schoolBag from '/src/assets/schoolBag.png'
import nArrival1 from '/src/assets/nArrival1.png'
import jhuri from '/src/assets/jhuri.png'

const ShopProduct = () => {
  return (
    <>
      <div className="py-8">
        <Container>
          <Heading
            className={"font-bold text-[49px] text-hoverC mb-[20px]"}
            text={"Products"}
            as={"h3"}
          />
          <Flex>
            <div className="grid grid-cols-[1fr_3fr] gap-x-3">
                <div className="">
                  <Heading
                    className={"font-bold text-xl text-hoverC mb-14"}
                    text={"Shop by Category"}
                    as={"h5"}
                  />
                  <div className="flex flex-col">
                    <div className=" flex justify-between py-4 px-6 bg-[#F0F0F0] mb-5">
                        <p class={"text-base text-menuC leading-7.5"}>Category 1</p>
                        <p>+</p>
                        
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <div className="flex justify-between py-4 px-6 bg-[#F0F0F0]  mb-5">
                        <p class={"text-base text-menuC leading-7.5"}>Category 2</p>
                        <p>+</p>
                        
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <div className="flex justify-between py-4 px-6 bg-[#F0F0F0]  mb-5">
                        <p class={"text-base text-menuC leading-7.5"}>Category 3</p>
                        <p>+</p>
                        
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <div className="flex justify-between py-4 px-6 bg-[#F0F0F0] mb-5">
                        <p class={"text-base text-menuC leading-7.5"}>Category 4</p>
                        <p>+</p>
                        
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex justify-between py-4 px-6 bg-[#F0F0F0] mb-5">
                        <p class={"text-base text-menuC leading-7.5"}>Category 5</p>
                        <p>+</p>
                        
                    </div>
                  </div>
                  


                </div>
                <div className="">
                  <div className={"flex justify-end gap-x-8 mb-10"}>
                  <div className="flex">
                    <p className={"text-base text-menuC leading-10 mr-3"}>
                      Shot by :
                    </p>
                    <div className="relative">
                      <input
                        className={"bg-[#F0F0F0] w-[240px] py-2 px-3"}
                        type="text"
                        placeholder={"Featured"}
                      />
                      <GoTriangleDown
                        className={"absolute top-1/2 right-1 -translate-1/2 "}
                      />
                    </div>
                  </div>
                  <dex className="flex">
                    <p className={"text-base text-menuC leading-10 mr-3"}>
                      Show :
                    </p>
                    <div className="relative">
                      <input
                        className={"bg-[#F0F0F0] w-[139px] py-2 px-3"}
                        type="text"
                        placeholder={"36"}
                      />
                      <GoTriangleDown
                        className={"absolute top-1/2 right-1 -translate-1/2 "}
                      />
                    </div>
                  </dex>
                    
                  
                </div>
                <div className="">
                  <Flex className={"gap-x-3 "}>
                  <Product imgSrc={hamalDista} imgAlt={hamalDista} imgclassName={"w-[350px]"} badgeText={"New"} productInfoName={"Basic Crew Neck Tee"} productPrice={"$44.00"} badgeclassName={"bg-red-600"}/>
                  <Product imgSrc={specialOffer3} imgAlt={specialOffer3} imgclassName={"w-[350px]"} badgeText={"10%"} productInfoName={"Basic Crew Neck Tee"} productPrice={"$44.00"} badgeclassName={"bg-black"}/>
                  <Product imgSrc={specialOffer2} imgAlt={specialOffer2} imgclassName={"w-[350px]"} badgeText={"New"} productInfoName={"Basic Crew Neck Tee"} productPrice={"$44.00"} badgeclassName={"bg-black"}/>
            
                </Flex>
                <Flex className={"gap-x-3  mt-6"}>
                  <Product imgSrc={specialOffer1} imgAlt={specialOffer1} imgclassName={"w-[350px]"} badgeText={"New"} productInfoName={"Basic Crew Neck Tee"} productPrice={"$44.00"} badgeclassName={"bg-black"}/>
                  <Product imgSrc={specialOffer5} imgAlt={specialOffer5} imgclassName={"w-[350px]"} badgeText={"10%"} productInfoName={"Basic Crew Neck Tee"} productPrice={"$44.00"} badgeclassName={"bg-red-500"}/>
                  <Product imgSrc={schoolBag} imgAlt={schoolBag} imgclassName={"w-[350px]"} badgeText={"New"} productInfoName={"Basic Crew Neck Tee"} productPrice={"$44.00"} badgeclassName={"bg-black"}/>
            
                </Flex>
                <Flex className={"gap-x-3  mt-6"}>
                  <Product imgSrc={specialOffer4} imgAlt={specialOffer4} imgclassName={"w-[350px]"} badgeText={"New"} productInfoName={"Basic Crew Neck Tee"} productPrice={"$44.00"} badgeclassName={"bg-black"}/>
                  <Product imgSrc={nArrival1} imgAlt={nArrival1} imgclassName={"w-[350px]"} badgeText={"10%"} productInfoName={"Basic Crew Neck Tee"} productPrice={"$44.00"} badgeclassName={"bg-red-500"}/>
                  <Product imgSrc={specialOffer1} imgAlt={specialOffer1} imgclassName={"w-[350px]"} badgeText={"New"} productInfoName={"Basic Crew Neck Tee"} productPrice={"$44.00"} badgeclassName={"bg-black"}/>
            
                </Flex>
                <Flex className={"gap-x-3  mt-6"}>
                  <Product imgSrc={jhuri} imgAlt={jhuri} imgclassName={"w-[350px]"} badgeText={"New"} productInfoName={"Basic Crew Neck Tee"} productPrice={"$44.00"} badgeclassName={"bg-black"}/>
                  <Product imgSrc={specialOffer5} imgAlt={specialOffer5} imgclassName={"w-[350px]"} badgeText={"10%"} productInfoName={"Basic Crew Neck Tee"} productPrice={"$44.00"} badgeclassName={"bg-black"}/>
                  <Product imgSrc={specialOffer3} imgAlt={specialOffer3} imgclassName={"w-[350px]"} badgeText={"New"} productInfoName={"Basic Crew Neck Tee"} productPrice={"$44.00"} badgeclassName={"bg-red-500"}/>
            
                </Flex>

                </div>
                

                </div>
                
             
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default ShopProduct;
