import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Badge from "./Badge";
import Image from "./Image";
import { addToCart } from "./slices/addToCartSlice";
import { toggleWishlist } from "./slices/wishlistSlice";
import { useToast } from "./ToastContext";

const Product = ({
  productId,
  imgSrc,
  imgAlt,
  badgeText,
  badgeclassName,
  productName,
  productPrice,
  productCategory,
  productColor,
  productTitle,
  productRatingText,
  productWeight,
}) => {
  const dispatch = useDispatch();
  const { addToast } = useToast();
  const wishlist = useSelector((state) => state.wishlist.value);
  const productLabel = productTitle || productName;
  const isWishlisted = wishlist.some((item) => item.id === productId);

  const handleAddToCart = () => {
    const normalizedId = productId || productName || productTitle;
    const parsedPrice = Number(
      String(productPrice ?? "")
        .replace(/[^0-9.]/g, ""),
    ) || 0;
    const normalizedWeightKg = Number(productWeight) || 0;

    if (!normalizedId) {
      return;
    }

    dispatch(
      addToCart({
        _id: normalizedId,
        id: normalizedId,
        title: productLabel,
        thumbnail: imgSrc || "",
        price: parsedPrice,
        quantity: 1,
        weightKg: normalizedWeightKg,
      }),
    );
    addToast(`${productLabel} added to cart.`);
  };

  const handleWishlist = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(
      toggleWishlist({
        id: productId,
        name: productLabel,
        img: imgSrc,
        price: productPrice,
        category: productCategory,
      }),
    );
    addToast(isWishlisted ? `${productLabel} removed from wishlist.` : `${productLabel} added to wishlist.`);
  };

  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-[#E8E8F2] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <Image
          className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-105"
          imgSrc={imgSrc}
          imgAlt={imgAlt || productTitle || productName}
          fallbackSrc="/src/assets/Ad_1.png"
        />
        <Badge
          className={`absolute top-4 left-4 ${badgeclassName || "bg-[#241B8E] text-white"}`}
          badgeText={badgeText || "New"}
        />
        <div className="absolute inset-x-0 bottom-0 hidden overflow-hidden bg-black/20 p-4 backdrop-blur-sm transition duration-300 group-hover:block">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {productId && (
              <Link
                to={`/productDetails/${productId}`}
                className="rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/25"
              >
                Quick View
              </Link>
            )}
            <div className="flex items-center gap-3">
              <button
                onClick={handleWishlist}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${isWishlisted ? 'border-[#FF6B6B] text-[#FF6B6B] bg-white/90' : 'border-white/30 text-white bg-white/15 hover:bg-white/25'}`}
              >
                <FaHeart className="inline-block mr-2 text-base" />
                {isWishlisted ? 'Wishlisted' : 'Wishlist'}
              </button>
              <button
                onClick={handleAddToCart}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#241B8E] transition hover:bg-white/90"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-[#1F1F1F]">{productTitle || productName}</h3>
          <span className="text-sm font-semibold text-[#241B8E]">{productPrice}</span>
        </div>
        <p className="text-sm text-[#6B6B6B]">{productCategory || "Lifestyle"}</p>
        <div className="flex items-center justify-between text-sm text-[#8F8F8F]">
          <span>{productColor || "Multiple colors"}</span>
          <span>{productRatingText || "Fast shipping"}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
