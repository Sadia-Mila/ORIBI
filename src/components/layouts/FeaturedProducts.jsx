import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../Container";
import Heading from "../Heading";
import Product from "../Product";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/product/allproductList")
      .then((res) => {
        setProducts(res.data.data.slice(0, 4));
      })
      .finally(() => setLoading(false));
  }, []);

  const badgeText = {
    0: "New",
    1: "Sale",
    2: "Best",
    3: "Hot",
  };

  return (
    <section className="py-10 bg-white">
      <Container>
        <Heading
          as="h2"
          text="Featured Products"
          className="text-3xl font-bold text-[#1F1F1F] mb-8"
        />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="min-h-[380px] rounded-[28px] bg-[#F6F5FF] p-6 animate-pulse"
                />
              ))
            : products.map((item, index) => (
                <Product
                  key={item._id}
                  productId={item._id}
                  imgSrc={item.thumbnailImage}
                  imgAlt={item.name}
                  badgeText={badgeText[index] || "New"}
                  productTitle={item.name}
                  productPrice={`$${item.price}`}
                  productCategory={item.category}
                  productColor={item.color}
                />
              ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
