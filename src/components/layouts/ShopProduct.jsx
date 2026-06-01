import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Product from "../Product";

const priceRanges = [
  { id: "all", label: "All Prices" },
  { id: "0-49", label: "$0 - $49", min: 0, max: 49 },
  { id: "50-99", label: "$50 - $99", min: 50, max: 99 },
  { id: "100-199", label: "$100 - $199", min: 100, max: 199 },
  { id: "200+", label: "$200+", min: 200, max: Infinity },
];

const ShopProduct = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [sortValue, setSortValue] = useState("featured");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/product/allproductList")
      .then((res) => setProducts(res.data.data))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/category/allcategorylist")
      .then((res) => setCategories(res.data.data))
      .catch(() => setCategories([]));
  }, []);

  const brands = useMemo(() => {
    const brandSet = new Set();
    products.forEach((item) => {
      if (item.brand) brandSet.add(item.brand);
      else if (item.color) brandSet.add(item.color);
    });
    return ["All", ...Array.from(brandSet)];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        if (selectedCategory !== "All" && product.category !== selectedCategory) return false;
        if (selectedBrand !== "All" && (product.brand || product.color) !== selectedBrand) return false;
        if (selectedPrice !== "all") {
          const range = priceRanges.find((item) => item.id === selectedPrice);
          const price = Number(product.price);
          if (!range || price < range.min || price > range.max) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortValue === "price-asc") return Number(a.price) - Number(b.price);
        if (sortValue === "price-desc") return Number(b.price) - Number(a.price);
        return 0;
      });
  }, [products, selectedCategory, selectedBrand, selectedPrice, sortValue]);

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
    <div className="py-12">
      <Container>
        <Heading text="Products" as="h3" className="mb-10 text-4xl font-bold text-[#1F1F1F]" />
        <Flex>
          <div className="grid w-full gap-8 lg:grid-cols-[280px_1fr]">
            <aside className="space-y-8 rounded-[32px] border border-[#E9E9F0] bg-[#FBFBFF] p-6">
              <div>
                <Heading text="Shop by Category" as="h5" className="mb-5 text-xl font-semibold text-[#241B8E]" />
                <button
                  onClick={() => setSelectedCategory("All")}
                  className={`mb-3 block w-full rounded-[24px] px-4 py-4 text-left text-sm font-medium transition ${selectedCategory === "All" ? 'bg-[#241B8E] text-white' : 'bg-white text-[#4A4A4A] hover:bg-[#F7F5FF]'}`}
                >
                  All Categories
                </button>
                {categories.map((category) => (
                  <button
                    key={category._id || category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`mb-3 block w-full rounded-[24px] px-4 py-4 text-left text-sm font-medium transition ${selectedCategory === category.name ? 'bg-[#241B8E] text-white' : 'bg-white text-[#4A4A4A] hover:bg-[#F7F5FF]'}`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              <div>
                <Heading text="Shop by Brand" as="h5" className="mb-5 text-xl font-semibold text-[#241B8E]" />
                {brands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`mb-3 block w-full rounded-[24px] px-4 py-4 text-left text-sm font-medium transition ${selectedBrand === brand ? 'bg-[#241B8E] text-white' : 'bg-white text-[#4A4A4A] hover:bg-[#F7F5FF]'}`}
                  >
                    {brand}
                  </button>
                ))}
              </div>

              <div>
                <Heading text="Shop by Price" as="h5" className="mb-5 text-xl font-semibold text-[#241B8E]" />
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => setSelectedPrice(range.id)}
                    className={`mb-3 block w-full rounded-[24px] px-4 py-4 text-left text-sm font-medium transition ${selectedPrice === range.id ? 'bg-[#241B8E] text-white' : 'bg-white text-[#4A4A4A] hover:bg-[#F7F5FF]'}`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </aside>

            <section>
              <div className="mb-8 flex flex-wrap items-center gap-4 justify-between">
                <div className="flex flex-wrap gap-3">
                  <div className="relative w-full max-w-[240px] rounded-[24px] border border-[#E9E9F0] bg-white px-4 py-3">
                    <input className="w-full bg-transparent text-sm outline-none" value={sortValue} readOnly />
                    <GoTriangleDown className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-[#7B7B7B]" />
                  </div>
                  <select
                    value={sortValue}
                    onChange={(event) => setSortValue(event.target.value)}
                    className="rounded-[24px] border border-[#E9E9F0] bg-white px-4 py-3 text-sm outline-none"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                  </select>
                </div>
                <p className="text-sm text-[#6B6B6B]">{filteredProducts.length} products found</p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {loading
                  ? Array.from({ length: 6 }).map((_, index) => (
                      <div key={index} className="h-[420px] rounded-[28px] bg-[#F5F4FF] p-6 animate-pulse" />
                    ))
                  : filteredProducts.length > 0
                  ? filteredProducts.map((item, index) => (
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
                        productRatingText={item.brand || item.color}
                        productWeight={item.weightKg ?? item.weight ?? 0}
                      />
                    ))
                  : (
                    <div className="rounded-[28px] border border-dashed border-[#DAD7F5] bg-[#F7F5FF] p-10 text-center text-sm text-[#6B6B6B]">
                      No results match your filters. Try a different category or price range.
                    </div>
                  )}
              </div>
            </section>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default ShopProduct;
