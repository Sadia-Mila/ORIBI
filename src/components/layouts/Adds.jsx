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
              <div className="">
                <Image imgSrc={Ad_1} imgAlt={Ad_1} className={""} />         
              </div>
                <div className="flex flex-col gap-y-8">
                <div className="">
                  <Image imgSrc={Ad_2} imgAlt={Ad_2} />
                   
                </div>
                <div className="">
                  <Image imgSrc={Ad_3} imgAlt={Ad_3} />
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
