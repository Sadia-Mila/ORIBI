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
import axios from "axios";
import { useEffect, useState } from "react";

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

  const [myProduct, setMyProduct] = useState ([]);
  useEffect (()=>{
   async function all() {
    let data = await axios.get("https://dummyjson.com/products");
      setMyProduct(data.data.products)
    
   }
   all()
  }, [])
  

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
              {myProduct.map((item)=>(
             <div key={item.id}>
              <div className="bg-gray-200 mx-3 p-5 rounded-lg ">
                    <Product  className="mx-3"
                    imgSrc={item.thumbnail}
                     badgeText={"New"}
                    productTitle={item.title}
                    productPrice={`$${item.price}`}      
                  />

              </div>
               {/* <div className="bg-gray-200 border-2 border-gray-400 mx-4 p-4 rounded-lg ">
                  <img src={item.thumbnail} alt="" className="h-full" />
                  
                    <h3 className="text-red-800 mb-3 text-center font-semibold text-lg">{item.title}</h3>
                  <div className="flex justify-between ">
                    <h3 className="text-hoverC">${item.price}</h3>
                    <h3 className="text-lg text-hoverC">{item.category}</h3>
                    
                  </div>
                  <div className="flex justify-between">
                    <p>Rating:{item.rating}</p>
                    <p>Stork: {item.stock}</p>
                  </div>
                </div> */}
          
              
             </div>


            ))}

                     
                
                
              
             </Slider>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NewArrival;


                // <div className="px-3">
                //   <Product
                //     imgSrc={nArrival2}
                //     imgAlt={nArrival2}
                //     badgeText={"New"}
                //     productInfoName={"Watch"}
                //     productPrice={"$64.00"}
                //   />
                // </div>
                // <div className="px-3">
                //   <Product
                //     imgSrc={nArrival3}
                //     imgAlt={nArrival3}
                //     badgeText={"50%"}
                //     productInfoName={"Busket"}
                //     productPrice={"$50.00"}
                //   />
                // </div>
                // <div className="px-3">
                //   <Product
                //     imgSrc={nArrival4}
                //     imgAlt={nArrival4}
                //     badgeText={"Best"}
                //     productInfoName={"Baby Toy"}
                //     productPrice={"$80.00"}
                //   />
                // </div>
                // <div className="px-3">
                //   <Product
                //     imgSrc={nArrival2}
                //     imgAlt={nArrival2}
                //     badgeText={"New"}
                //     productInfoName={"Watch"}
                //     productPrice={"$64.00"}
                //   />
                // </div>
