import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Container from "../Container";
import Heading from "../Heading";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
import Product from "../Product";

const NewArrival = () => {
  const [myProduct, setMyProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/product/allproductList")
      .then((res) => {
        const colors = ["#f8f6ff", "#f2f0ff", "#f7f5ff", "#eef0ff"];
        const productsWithBg = res.data.data.map((item, idx) => ({
          ...item,
          bgColor: colors[idx % colors.length],
        }));
        setMyProduct(productsWithBg);
      })
      .catch(() => setMyProduct([]))
      .finally(() => setLoading(false));
  }, []);

  const badgeText = {
    1: "10%",
    3: "Sale",
    4: "20%",
    5: "15%",
    6: "16%",
    7: "18%",
    8: "New",
    14: "10%",
    18: "14%",
  };

  return (
    <section className="pt-5 pb-20 bg-[#F8F8FF]">
      <Container>
        <Heading as="h3" text="New Arrivals" className="mb-8 text-3xl font-bold text-[#1F1F1F]" />
        <div className="-mx-4">
          <Slider {...settings}>
            {loading
              ? Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="px-4">
                    <div className="h-[420px] rounded-[32px] bg-[#EAE9FF] p-6 animate-pulse" />
                  </div>
                ))
              : myProduct.map((item, index) => (
                  <div key={item._id} className="px-4">
                    <Product
                      productId={item._id}
                      imgSrc={item.thumbnailImage}
                      badgeText={badgeText[index] || "New"}
                      imgAlt={item.name}
                      productTitle={item.name}
                      productPrice={`$${item.price}`}
                      productCategory={item.category}
                      productColor={item.color}
                    />
                  </div>
                ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default NewArrival;
