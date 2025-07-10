import Badge from "./Badge";
import Image from "./Image";
import Heading from "./Heading";
import { FaHeart, FaShoppingCart  } from "react-icons/fa";
import Flex from "./Flex";
import Compare from "../assets/Icons/Compare";
import ProductInfo from "./ProductInfo";

const Product = ({imgSrc, imgAlt, badgeText, productInfoName, productPrice}) => {
  return (
    <>
      <div className="relative group">
        <Image imgSrc={imgSrc} imgAlt={imgAlt} />
        <Badge className={"absolute top-5 left-5"} badgeText={badgeText} />
        <div className="p-7.5 bg-white absolute bottom-10 left-0 w-full opacity-0 translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            <Flex className="justify-end gap-x-4">
                <Heading className={"text-base text-menuC"} text={"Add to Wish List"} as={"h6"}/>
                <FaHeart />
            </Flex>
            <Flex className="justify-end gap-x-4 py-4">
                <Heading className={"text-base text-menuC"} text={"Compare"} as={"h6"}/>
                <Compare />
            </Flex>
            <Flex className="justify-end gap-x-4">
                <Heading className={"text-base text-menuC"} text={"Add to Cart"} as={"h6"}/>
                <FaShoppingCart />
            </Flex>

        </div>
        <div className="flex items-center justify-between mt-4">
        
          <ProductInfo  productName={productInfoName}/>
          <ProductInfo  productPrice={productPrice} />

        </div>        
      </div>
    </>
  );
};

export default Product;
