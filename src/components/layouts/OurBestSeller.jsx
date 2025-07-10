import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Product from '../Product'
import waterPot from '/src/assets/waterPot.png'
import officeBag from '/src/assets/officeBag.png'
import hamalDista from '/src/assets/hamalDista.png'
import schoolBag from '/src/assets/schoolBag.png'

const OurBestSeller = () => {
  return (
    <>
    <div className="py-8">
        <Container>
            <Heading className={"text-[39px] font-bold text-hoverC mb-6"} text={"Our Best Sellers"} as={"h3"}/>
                <Flex className={"gap-x-8"}>
                    <Product imgSrc={waterPot} imgAlt={waterPot} badgeText={"New"} productInfoName={"Water Pot"} productPrice={"$80"}/>
                    <Product imgSrc={officeBag} imgAlt={officeBag} badgeText={"30%"} productInfoName={"Office Bag"} productPrice={"$120"}/>
                    <Product imgSrc={hamalDista} imgAlt={hamalDista} badgeText={"5%"} productInfoName={"Hamal Dista"} productPrice={"$50"}/>
                    <Product imgSrc={schoolBag} imgAlt={schoolBag} badgeText={"New"} productInfoName={"School Bag"} productPrice={"$140"}/>
                </Flex>
        </Container>
    </div>
      
    </>
  )
}

export default OurBestSeller
