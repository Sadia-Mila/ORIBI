import Product from "../Product";
import Container from "../Container";
import Heading from "../Heading";
import nArrival1 from "/src/assets/nArrival1.png";
import nArrival2 from "/src/assets/nArrival2.png";
import nArrival3 from "/src/assets/nArrival3.png";
import nArrival4 from "/src/assets/nArrival4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";

const NewArrival = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,             
    autoplaySpeed: 1000,    
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };

  return (
    <>
      <div className="pb-12">
        <Container>
          <Heading
            className={"text-[39px] font-bold text-hoverC mb-6"}
            text={"New Arrivals"}
            as="h3"
          />
          <div className={"-mx-3"}>
            <Slider {...settings}>
                <div className="px-3">
                  <Product
                    imgSrc={nArrival1}
                    imgAlt={nArrival1}
                    badgeText={"10%"}
                    productInfoName={"Basic Crew Neck"}
                    productPrice={"$34.00"}
                  />
                </div>
                <div className="px-3">
                  <Product
                    imgSrc={nArrival2}
                    imgAlt={nArrival2}
                    badgeText={"New"}
                    productInfoName={"Watch"}
                    productPrice={"$64.00"}
                  />
                </div>
                <div className="px-3">
                  <Product
                    imgSrc={nArrival3}
                    imgAlt={nArrival3}
                    badgeText={"50%"}
                    productInfoName={"Busket"}
                    productPrice={"$50.00"}
                  />
                </div>
                <div className="px-3">
                  <Product
                    imgSrc={nArrival4}
                    imgAlt={nArrival4}
                    badgeText={"Best"}
                    productInfoName={"Baby Toy"}
                    productPrice={"$80.00"}
                  />
                </div>
                <div className="px-3">
                  <Product
                    imgSrc={nArrival2}
                    imgAlt={nArrival2}
                    badgeText={"New"}
                    productInfoName={"Watch"}
                    productPrice={"$64.00"}
                  />
                </div>
              
            </Slider>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NewArrival;
