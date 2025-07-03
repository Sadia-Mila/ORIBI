import Container from "../Container"
import Image from "../Image"
import offerBg from '../../assets/offerBg.png'
import Heading from "../Heading"

const Offer = () => {
  return (
    <>
    <div className="relative">
        <Container>
            <Image imgSrc={offerBg} imgAlt={offerBg} className={'bg-no-repeat bg-cover bg-center'}/>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Heading text={"Watch of the year"} as={"h1"} className={"text-[39px] font-bold text-hoverC mb-3"}/>
                    <Heading text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum.."} as={"p"} className={"w-[390px] text-base text-[#6D6D6D] mr-3"}/>
                     <button className={"py-4 px-15 bg-hoverC text-white text-sm font-bold mt-5"}>Shop Now</button>
                
                </div>

        </Container>
    </div>
      
    </>
  )
}

export default Offer
