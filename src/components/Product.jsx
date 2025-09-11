import Badge from "./Badge";
import Image from "./Image";
import Heading from "./Heading";
import { FaHeart, FaShoppingCart  } from "react-icons/fa";
import Flex from "./Flex";
import Compare from "../assets/Icons/Compare";
import ProductInfo from "./ProductInfo";
import { useDispatch } from "react-redux";
import { addtocart } from "./slices/assToCartSlice";

const Product = ({imgSrc, imgAlt, imgclassName, badgeText, badgeclassName, productTitle, productPrice, productRating, productRatingText, productCategory, thumbnail}) => {
  const dispatch = useDispatch()
  const handleAddToCart = () =>{
    dispatch(addtocart({
      productTitle: productTitle,
      img: imgSrc,
      price : productPrice,
      quantity: 1
    }))
    
    
  }
  return (
    <>
      <div className="relative group">
        <Image className={`${imgclassName}`} imgSrc={imgSrc} imgAlt={imgAlt} />
        <Badge className={`absolute top-3 left-3 ${badgeclassName}`} badgeText={badgeText} />
        <div className="p-7.5 bg-white absolute bottom-10 left-0 w-full opacity-0 translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            <Flex className="justify-end gap-x-4">
                <Heading className={"text-base text-menuC"} text={"Add to Wish List"} as={"h6"}/>
                <FaHeart />
            </Flex>
            <Flex className="justify-end gap-x-4 py-4">
                <Heading className={"text-base text-menuC"} text={"Compare"} as={"h6"}/>
                <Compare />
            </Flex>
            <div onClick={handleAddToCart} className="flex justify-end gap-x-4">
                <Heading className={"text-base text-menuC"} text={"Add to Cart"} as={"h6"}/>
                <FaShoppingCart />
            </div>

        </div>
        <div className="flex items-center justify-between mt-4">
        
          <ProductInfo  productTitle={productTitle}/>
          <ProductInfo  productPrice={productPrice} />
          <ProductInfo productRating={productRating}/>
          <ProductInfo productRatingText= {productRatingText}/>
          <ProductInfo productCategory= {productCategory}/>


        </div>        
      </div>
    </>
  );
};

export default Product;
