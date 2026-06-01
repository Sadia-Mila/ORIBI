import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  applyCoupon,
  clearCoupon,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../slices/addToCartSlice";

import {
  FaArrowRight,
  FaShoppingBag,
  FaTrashAlt,
} from "react-icons/fa";


const Cart = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);
  const coupon = useSelector((state) => state.cart.coupon);
  const [couponCode, setCouponCode] = useState(coupon?.code || "");
  const [applying, setApplying] = useState(false);
  const [couponError, setCouponError] = useState("");
  const totalQuantity = items.reduce(
    (total, item) => total + (item.quantity || 1),
    0,
  );

  const subTotal = items.reduce(
    (total, item) =>
      total + Number(item.price) * item.quantity,
    0,
  );

  const shipping = subTotal > 0 ? 50 : 0;
  const discount = Number(coupon?.discountAmount || 0);
  const total = Math.max(0, subTotal - discount) + shipping;

  const normalizedCouponCode = useMemo(
    () =>
      String(couponCode || "")
        .trim()
        .toUpperCase()
        .replace(/\s+/g, ""),
    [couponCode],
  );

  const handleApplyCoupon = async () => {
    const code = normalizedCouponCode;
    if (!code) return;
    try {
      setApplying(true);
      setCouponError("");
      const res = await fetch("http://localhost:3000/api/v1/coupon/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, subtotal: subTotal }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.message || "Failed to apply coupon");
      }
      dispatch(applyCoupon(data.data));
    } catch (e) {
      dispatch(clearCoupon());
      setCouponError(e.message || "Failed to apply coupon");
    } finally {
      setApplying(false);
    }
  };

  const handleRemoveCoupon = () => {
    dispatch(clearCoupon());
    setCouponCode("");
    setCouponError("");
  };

  useEffect(() => {
    if (!coupon?.code) return;
    setCouponCode(coupon.code);
  }, [coupon?.code]);

  useEffect(() => {
    if (!coupon?.code) return;
    // Re-validate coupon when cart changes
    fetch("http://localhost:3000/api/v1/coupon/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: coupon.code, subtotal: subTotal }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data?.message || "Coupon invalid");
        dispatch(applyCoupon(data.data));
      })
      .catch(() => {
        dispatch(clearCoupon());
      });
  }, [subTotal]);

  // Empty Cart UI
  if (!items.length) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-bHeaderBg px-4">
        <div className="bg-white border border-gray-200 shadow-sm rounded-[30px] p-10 text-center max-w-md w-full">
          <div className="w-24 h-24 mx-auto rounded-full bg-black text-white flex items-center justify-center text-3xl">
            <FaShoppingBag />
          </div>

          <h2 className="text-3xl font-bold mt-6">
            Your Cart is Empty
          </h2>

          <p className="text-gray-500 mt-3 leading-7">
            Looks like you haven't added anything to your cart yet.
          </p>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-4 rounded-2xl mt-8 font-semibold hover:opacity-90 duration-300"
          >
            Continue Shopping
            <FaArrowRight />
          </Link>
        </div>
      </section>
    );
  }
  return (
     <>

      {/* <Intro text={"Cart"} pText={"Cart"} /> */}
      <section className="bg-bHeaderBg py-10 md:py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-menuHeading">
            Shopping Cart
          </h2>

          <p className="text-gray-500 mt-3">
            You have {totalQuantity} item(s) in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-5">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-[28px] p-5 md:p-6 shadow-sm hover:shadow-md duration-300"
              >
                <div className="flex flex-col md:flex-row gap-5 items-start md:items-center">
                  {/* Product Image */}
                  <div className="w-full md:w-[150px] h-[150px] rounded-2xl overflow-hidden bg-[#f5f5f5]">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 duration-500"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-black">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 mt-2">
                      Premium quality product with modern style.
                    </p>

                    <div className="flex items-center gap-6 mt-5 flex-wrap">
                      {/* Price */}
                      <div>
                        <p className="text-sm text-gray-400">
                          Price
                        </p>

                        <h4 className="text-xl font-semibold">
                          ৳ {Number(item.price).toFixed(2)}
                        </h4>
                      </div>

                      {/* Quantity */}
                      <div>
                        <p className="text-sm text-gray-400 mb-2">
                          Quantity
                        </p>

                        <div className="flex items-center border border-gray-300 rounded-2xl overflow-hidden">
                          <button
                            className="w-12 h-12 text-xl hover:bg-gray-100 duration-300"
                            onClick={() =>
                              dispatch(decreaseQuantity(item.id))
                            }
                          >
                            -
                          </button>

                          <span className="w-14 text-center font-semibold">
                            {item.quantity}
                          </span>

                          <button
                            className="w-12 h-12 text-xl hover:bg-gray-100 duration-300"
                            onClick={() =>
                              dispatch(increaseQuantity(item.id))
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Total */}
                      <div>
                        <p className="text-sm text-gray-400">
                          Total
                        </p>

                        <h4 className="text-2xl font-bold text-black">
                          ৳{" "}
                          {(
                            Number(item.price) *
                            item.quantity
                          ).toFixed(0)}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    className="w-12 h-12 rounded-full border border-red-200 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white duration-300"
                    onClick={() =>
                      dispatch(removeFromCart(item.id))
                    }
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="sticky top-10">
            <div className="bg-white border border-gray-200 rounded-[30px] p-7 shadow-sm">
              <h3 className="text-3xl font-bold text-menuHeading">
                Order Summary
              </h3>

              {/* Summary */}
              <div className="mt-8 space-y-5">
                <div className="flex items-center justify-between">
                  <p className="text-gray-500">Subtotal</p>

                  <h4 className="font-semibold text-lg">
                    ৳ {subTotal.toFixed(2)}
                  </h4>
                </div>

                {coupon?.discountAmount ? (
                  <div className="flex items-center justify-between">
                    <p className="text-gray-500">
                      Discount{" "}
                      <span className="text-xs text-gray-400">({coupon.code})</span>
                    </p>
                    <h4 className="font-semibold text-lg text-green-600">
                      - ৳ {Number(coupon.discountAmount).toFixed(2)}
                    </h4>
                  </div>
                ) : null}

                <div className="flex items-center justify-between">
                  <p className="text-gray-500">Shipping</p>

                  <h4 className="font-semibold text-lg">
                    ৳ {shipping.toFixed(2)}
                  </h4>
                </div>

                <div className="border-t border-dashed pt-5 flex items-center justify-between">
                  <p className="text-xl font-semibold">
                    Total
                  </p>

                  <h3 className="text-3xl font-bold">
                    ৳ {total.toFixed(2)}
                  </h3>
                </div>
              </div>

              {/* Coupon */}
              <div className="mt-8">
                <p className="font-medium mb-3">
                  Apply Coupon
                </p>

                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="flex-1 h-[55px] border border-gray-300 rounded-2xl px-5 outline-none focus:border-black"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />

                  {coupon?.code ? (
                    <button
                      type="button"
                      onClick={handleRemoveCoupon}
                      className="h-[55px] px-5 rounded-2xl border border-black font-medium hover:bg-black hover:text-white duration-300"
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleApplyCoupon}
                      disabled={applying || !normalizedCouponCode}
                      className="h-[55px] px-5 rounded-2xl bg-black text-white font-medium hover:opacity-90 duration-300 disabled:opacity-60"
                    >
                      {applying ? "Applying..." : "Apply"}
                    </button>
                  )}
                </div>

                {couponError ? (
                  <p className="text-sm text-red-500 mt-3">{couponError}</p>
                ) : null}
              </div>

              {/* Checkout Button */}
              <Link
                to="/checkout"
                className="mt-8 h-[60px] rounded-2xl bg-black text-white font-semibold text-lg flex items-center justify-center gap-3 hover:opacity-90 duration-300"
              >
                Proceed to Checkout
                <FaArrowRight />
              </Link>

              {/* Continue Shopping */}
              <Link
                to="/shop"
                className="mt-4 h-[55px] rounded-2xl border border-black font-semibold flex items-center justify-center hover:bg-black hover:text-white duration-300"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Cart