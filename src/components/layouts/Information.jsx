
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import { FaTruck, FaUndoAlt  } from "react-icons/fa";

const Information = () => {
  return (
    <div>
        <>
        <div className="py-6.5 bg-[#F0F0F0]">
            <Container>
                <Flex className={"flex justify-between items-center"}>
                    <div className="flex items-center">
                        <Heading text={"2"} as={"h2"} className={"text-3xl font-bold text-hoverC mr-3"}/>
                        <Heading text={"Two years warranty"} as={"h3"} className={"text-base font-regular text-[#6D6D6D]"}/>
                    </div>
                    <div className="flex items-center">
                        <FaTruck  className={"text-xl mr-3"}/>
                        <Heading text={"Free shipping"} as={"h3"} className={"text-base font-regular text-[#6D6D6D]"}/>
                    </div>
                    <div className="flex items-center">
                        <FaUndoAlt className={"text-xl mr-3"}/>
                        <Heading text={"Return policy in 30 days"} as={"h3"} className={"text-base font-regular text-[#6D6D6D]"}/>
                    </div>
                    
                </Flex>
            </Container>

        </div>
        </>
      
    </div>
  )
}

export default Information
