import React from 'react'
import Image from '../Image'
import bannerBg from '../../assets/bannerBg.png'
import Container from '../Container'
import bannerSideBtn from '../../assets/bannerSideBtn.png'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
        <>
        <div className="">
            <Link to={"/"}>
            <Image imgSrc={bannerBg} imgAlt={bannerBg} className={'bg-no-repeat bg-cover bg-center'}/>
            </Link>
            <Container>
                <Image imgSrc={bannerSideBtn} imgAlt={bannerSideBtn} className={"absolute top-[340px] left-[180px]"}/>
            </Container>
        </div>
         
        </>

  )
}

export default Banner
