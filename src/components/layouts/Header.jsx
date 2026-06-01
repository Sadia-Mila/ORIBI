import axios from "axios";
import { useEffect, useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { useCustomerAuth } from "../../context/CustomerAuthContext";
import Container from "../Container";
import Heading from "../Heading";
import Image from "../Image";
import { useToast } from "../ToastContext";

const Header = () => {
  const [isCategory, setIsCategory] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [categories, setCategories] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [accountAction, setAccountAction] = useState("login");
  const navigate = useNavigate();
  const { addToast } = useToast();
  const { customer, logout } = useCustomerAuth();
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0,
  );
  const cartSubtotal = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 1) * Number(item.price || 0),
    0,
  );
  const displayName = customer?.firstName?.trim()
    ? customer.firstName
    : customer?.email?.split("@")[0] || "Customer";

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/category/allcategorylist")
      .then((res) => setCategories(res.data.data))
      .catch(() => setCategories([]));
  }, []);

  useEffect(() => {
    setAccountAction(customer ? "profile" : "login");
  }, [customer]);

  const handleAccountChange = async (event) => {
    const nextAction = event.target.value;

    if (nextAction === "login") {
      navigate("/customer-login");
      return;
    }

    if (nextAction === "dashboard" || nextAction === "profile") {
      navigate("/customer-dashboard");
      return;
    }

    if (nextAction === "logout") {
      await logout();
      addToast("You have been logged out.", "success");
      navigate("/");
      return;
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#E9E9F0] bg-white/95 backdrop-blur-xl">
      <div className="px-4 py-5 sm:px-6">
        <Container className="flex items-center justify-between gap-4">
          <Link to="/">
            <Image imgSrc={Logo} imgAlt="Orebi Logo" className="h-10 w-auto" />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              to="/"
              className="text-base font-medium text-[#646464] transition hover:text-[#241B8E]"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-base font-medium text-[#646464] transition hover:text-[#241B8E]"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="text-base font-medium text-[#646464] transition hover:text-[#241B8E]"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-base font-medium text-[#646464] transition hover:text-[#241B8E]"
            >
              Contact
            </Link>
            <Link
              to="/journal"
              className="text-base font-medium text-[#646464] transition hover:text-[#241B8E]"
            >
              Journal
            </Link>
          </nav>
          {/* user and Cart part Start */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E6E6F2] bg-[#F8F6FF] px-2 py-1.5">
                <FaUser className="text-lg text-[#241B8E]" />
                <select
                  value={accountAction}
                  onChange={handleAccountChange}
                  className="border-0 bg-transparent text-sm font-semibold text-[#2F2F2F] outline-none"
                  aria-label="Customer account menu"
                >
                  {customer ? (
                    <>
                      <option value="profile">{displayName}</option>
                      <option value="dashboard">Dashboard</option>
                      <option value="logout">Logout</option>
                    </>
                  ) : (
                    <option value="login">Login</option>
                  )}
                </select>
              </div>
            </div>
            <div className="relative">
              <button
                onClick={() => setIsCartOpen((prev) => !prev)}
                className="relative inline-flex items-center rounded-full border border-[#E6E6F2] bg-white px-4 py-3 text-[#2F2F2F] transition hover:border-[#241B8E]"
                aria-label="Cart preview"
              >
                <FaShoppingCart className="text-lg" />
                {cartCount > 0 && (
                  <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#241B8E] px-1.5 text-[11px] font-semibold text-white">
                    {cartCount}
                  </span>
                )}
              </button>
              {isCartOpen && (
                <div className="absolute right-0 top-full z-40 mt-3 w-screen max-w-[420px] rounded-[32px] border border-[#E9E9F0] bg-white p-5 shadow-lg">
                  <div className="flex items-center justify-between pb-3">
                    <Heading
                      text="Cart preview"
                      as="h6"
                      className="text-base font-semibold text-[#1A1A1A]"
                    />
                    <button
                      onClick={() => setIsCartOpen(false)}
                      aria-label="Close cart preview"
                    >
                      <RxCross2 className="text-xl text-[#4B4B4B]" />
                    </button>
                  </div>
                  {cartItems.length === 0 ? (
                    <p className="text-sm text-[#6B6B6B]">
                      Your cart is currently empty.
                    </p>
                  ) : (
                    <div className="space-y-4">
                      <div className="overflow-hidden rounded-[24px] border border-[#E9E9F0]">
                        <table className="w-full text-left text-sm">
                          <thead className="bg-[#F7F5FF] text-[#4B4B4B]">
                            <tr>
                              <th className="px-3 py-2 font-semibold">Product</th>
                              <th className="px-3 py-2 font-semibold">Qty</th>
                              <th className="px-3 py-2 font-semibold">Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cartItems.map((item) => {
                              const itemTitle = item.title || item.productName || "Product";
                              const itemImage = item.thumbnail || item.img || "";
                              const itemPrice = Number(item.price || 0);
                              const itemTotal = (item.quantity || 1) * itemPrice;

                              return (
                                <tr key={item.id} className="border-t border-[#E9E9F0]">
                                  <td className="px-3 py-3">
                                    <div className="flex items-center gap-3">
                                      {itemImage && (
                                        <img
                                          src={itemImage}
                                          alt={itemTitle}
                                          className="h-12 w-12 rounded-xl object-cover"
                                        />
                                      )}
                                      <div>
                                        <p className="font-semibold text-[#1F1F1F]">{itemTitle}</p>
                                        <p className="text-xs text-[#6B6B6B]">
                                          Subtotal ৳ {itemTotal.toFixed(2)}
                                        </p>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="px-3 py-3 text-[#4B4B4B]">{item.quantity || 1}</td>
                                  <td className="px-3 py-3 font-semibold text-[#1F1F1F]">
                                    ৳ {itemPrice.toFixed(2)}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                      <div className="flex items-center justify-between border-t border-[#E9E9F0] pt-4 text-sm text-[#262626]">
                        <span>Sub-total</span>
                        <span className="font-semibold">৳ {cartSubtotal.toFixed(2)}</span>
                      </div>
                      <Link
                        to="/cart"
                        className="inline-flex w-full justify-center rounded-full bg-[#241B8E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1b1476]"
                      >
                        View full cart
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
            <button
              className="rounded-full border border-[#E6E6F2] bg-white p-3 text-[#2F2F2F] md:hidden"
              onClick={() => setIsMobileMenu((prev) => !prev)}
              aria-label="Open mobile menu"
            >
              <HiBars3BottomLeft className="text-xl" />
            </button>
          </div>
        </Container>
      </div>

      <div className="border-t border-[#E9E9F0] bg-[#F7F7FF] px-4 py-4 sm:px-6">
        <Container className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <button
            type="button"
            onClick={() => setIsCategory((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-full border border-[#E6E6F2] bg-white px-5 py-3 text-sm font-semibold text-[#2F2F2F] transition hover:border-[#241B8E] hover:text-[#241B8E]"
          >
            <HiBars3BottomLeft className="text-xl" />
            Shop by Category
          </button>
          <div className="relative w-full max-w-2xl">
            <input
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              placeholder="Search products, brands and categories"
              className="w-full rounded-full border border-[#E6E6F2] bg-white py-4 pl-5 pr-12 text-sm text-[#2F2F2F] outline-none transition focus:border-[#241B8E]"
            />
            <IoSearchSharp className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-[#6B6B6B]" />
          </div>
          <Link
            to="/cart"
            className="inline-flex items-center justify-center rounded-full bg-[#241B8E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1b1476]"
          >
            Checkout
          </Link>
        </Container>
        {isCategory && (
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {categories.slice(0, 8).map((item) => (
              <Link
                key={item._id || item.name}
                to="/shop"
                className="rounded-[28px] border border-[#E6E9F8] bg-white px-5 py-4 text-sm font-medium text-[#393939] transition hover:border-[#241B8E] hover:text-[#241B8E]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {isMobileMenu && (
        <div className="border-t border-[#E9E9F0] bg-white px-4 py-5 md:hidden">
          <div className="space-y-4">
            <Link
              to="/"
              className="block rounded-3xl border border-[#E6E6F2] bg-[#F7F7FF] py-4 px-5 text-base font-medium text-[#2F2F2F] transition hover:border-[#241B8E] hover:text-[#241B8E]"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="block rounded-3xl border border-[#E6E6F2] bg-[#F7F7FF] py-4 px-5 text-base font-medium text-[#2F2F2F] transition hover:border-[#241B8E] hover:text-[#241B8E]"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="block rounded-3xl border border-[#E6E6F2] bg-[#F7F7FF] py-4 px-5 text-base font-medium text-[#2F2F2F] transition hover:border-[#241B8E] hover:text-[#241B8E]"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block rounded-3xl border border-[#E6E6F2] bg-[#F7F7FF] py-4 px-5 text-base font-medium text-[#2F2F2F] transition hover:border-[#241B8E] hover:text-[#241B8E]"
            >
              Contact
            </Link>
            <Link
              to="/journal"
              className="block rounded-3xl border border-[#E6E6F2] bg-[#F7F7FF] py-4 px-5 text-base font-medium text-[#2F2F2F] transition hover:border-[#241B8E] hover:text-[#241B8E]"
            >
              Journal
            </Link>
            <Link
              to={customer ? "/customer-dashboard" : "/customer-login"}
              className="block rounded-3xl border border-[#E6E6F2] bg-[#F7F7FF] py-4 px-5 text-base font-medium text-[#2F2F2F] transition hover:border-[#241B8E] hover:text-[#241B8E]"
            >
              {customer ? "My Account" : "Login"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
