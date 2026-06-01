import { useEffect, useMemo, useState } from "react";
import { FaArrowLeft, FaShoppingBag } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../slices/addToCartSlice";
import { useToast } from "../ToastContext";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  address: "",
  division: "",
  city: "",
  country: "Bangladesh",
  notes: "",
};

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addToast } = useToast();
  const items = useSelector((state) => state.cart.items);
  const coupon = useSelector((state) => state.cart.coupon);
  const [form, setForm] = useState(initialForm);
  const [customerWeightKg, setCustomerWeightKg] = useState("");
  const [weightTouched, setWeightTouched] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [orderSuccess, setOrderSuccess] = useState(null);

  const subtotal = useMemo(
    () =>
      items.reduce(
        (total, item) => total + Number(item.price || 0) * (item.quantity || 1),
        0,
      ),
    [items],
  );
  const totalWeightKg = useMemo(
    () =>
      items.reduce(
        (total, item) =>
          total + Number(item.weightKg ?? item.weight ?? 0) * (item.quantity || 1),
        0,
      ),
    [items],
  );
  const formattedTotalWeight = totalWeightKg.toFixed(2);
  const effectiveWeightKg = useMemo(() => {
    const parsed = Number(customerWeightKg);
    return customerWeightKg.trim() !== "" && !Number.isNaN(parsed)
      ? parsed
      : totalWeightKg;
  }, [customerWeightKg, totalWeightKg]);
  const shippingBase = 50;
  const isOutsideDhaka = Boolean(form.division) && form.division !== "Dhaka";
  const extraShipping = isOutsideDhaka ? 20 : 0;
  const weightShipping = Math.max(0, effectiveWeightKg - 1) * 10;
  const shipping = useMemo(() => {
    if (subtotal <= 0) return 0;
    return shippingBase + extraShipping + weightShipping;
  }, [extraShipping, shippingBase, subtotal, weightShipping]);
  const discountAmount = Number(coupon?.discountAmount || 0);
  const total = Math.max(0, subtotal - discountAmount + shipping);

  useEffect(() => {
    if (!items.length && !orderSuccess) {
      navigate("/cart");
    }
  }, [items.length, navigate, orderSuccess]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleWeightChange = (event) => {
    setWeightTouched(true);
    setCustomerWeightKg(event.target.value);
  };

  useEffect(() => {
    if (!weightTouched) {
      setCustomerWeightKg(formattedTotalWeight);
    }
  }, [formattedTotalWeight, weightTouched]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!items.length) {
      setErrorMessage("Your cart is empty. Add products before checkout.");
      return;
    }

    setSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:3000/api/v1/orders/create", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer: {
            name: form.name,
            email: form.email,
            phone: form.phone,
            address: form.address,
            division: form.division,
            city: form.city,
            country: form.country,
            notes: form.notes,
          },
          totalWeightKg: effectiveWeightKg,
          items: items.map((item) => ({
            productId: item.id,
            title: item.title,
            thumbnail: item.thumbnail || "",
            price: Number(item.price || 0),
            quantity: item.quantity || 1,
            weightKg: Number(item.weightKg ?? item.weight ?? 0),
          })),
          coupon: coupon ? { code: coupon.code } : null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Unable to place order.");
      }

      setOrderSuccess(data.data);
      dispatch(clearCart());
      addToast("Order placed successfully!", "success");
      setForm(initialForm);
    } catch (error) {
      setErrorMessage(error.message || "Something went wrong.");
      addToast(error.message || "Something went wrong.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  if (orderSuccess) {
    return (
      <section className="min-h-screen bg-[#F8F7FF] px-4 py-12">
        <div className="mx-auto max-w-2xl rounded-[32px] border border-emerald-100 bg-white p-8 shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-700">
            <FaShoppingBag />
          </div>
          <h1 className="mt-6 text-center text-3xl font-bold text-[#1A1A1A]">
            Thank you for your order!
          </h1>
          <p className="mt-3 text-center text-gray-600">
            Your order <span className="font-semibold">{orderSuccess.orderNumber}</span> has been placed successfully.
          </p>
          <div className="mt-8 rounded-[24px] bg-[#F7F7FF] p-5 text-sm text-[#3F3F3F]">
            <p>
              <span className="font-semibold">Total paid:</span> ৳ {Number(orderSuccess.total || 0).toFixed(2)}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Status:</span> {orderSuccess.status}
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 font-semibold text-white"
            >
              Continue shopping
            </Link>
            <Link
              to="/cart"
              className="inline-flex items-center justify-center rounded-full border border-black px-6 py-3 font-semibold text-black"
            >
              Back to cart
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#F8F7FF] px-4 py-10 md:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#241B8E]">
              Checkout
            </p>
            <h1 className="mt-2 text-3xl font-bold text-[#1A1A1A] md:text-4xl">
              Complete your order
            </h1>
          </div>
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 rounded-full border border-[#E6E6F2] bg-white px-4 py-3 text-sm font-semibold text-[#2F2F2F]"
          >
            <FaArrowLeft />
            Back to cart
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <form onSubmit={handleSubmit} className="rounded-[32px] bg-white p-6 shadow-sm md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm font-medium text-[#2F2F2F]">
                Full name
                <input
                  required
                  value={form.name}
                  onChange={handleChange}
                  name="name"
                  placeholder="John Doe"
                  className="mt-2 h-[52px] w-full rounded-2xl border border-[#E6E6F2] px-4 outline-none focus:border-[#241B8E]"
                />
              </label>

              <label className="text-sm font-medium text-[#2F2F2F]">
                Email
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  name="email"
                  placeholder="john@example.com"
                  className="mt-2 h-[52px] w-full rounded-2xl border border-[#E6E6F2] px-4 outline-none focus:border-[#241B8E]"
                />
              </label>

              <label className="text-sm font-medium text-[#2F2F2F]">
                Phone
                <input
                  required
                  value={form.phone}
                  onChange={handleChange}
                  name="phone"
                  placeholder="01700000000"
                  className="mt-2 h-[52px] w-full rounded-2xl border border-[#E6E6F2] px-4 outline-none focus:border-[#241B8E]"
                />
              </label>

              <label className="text-sm font-medium text-[#2F2F2F]">
                Country
                <input
                  required
                  value={form.country}
                  onChange={handleChange}
                  name="country"
                  placeholder="Bangladesh"
                  className="mt-2 h-[52px] w-full rounded-2xl border border-[#E6E6F2] px-4 outline-none focus:border-[#241B8E]"
                />
              </label>

              <label className="text-sm font-medium text-[#2F2F2F] md:col-span-2">
                Address
                <input
                  required
                  value={form.address}
                  onChange={handleChange}
                  name="address"
                  placeholder="House, road, area"
                  className="mt-2 h-[52px] w-full rounded-2xl border border-[#E6E6F2] px-4 outline-none focus:border-[#241B8E]"
                />
              </label>

              <label className="text-sm font-medium text-[#2F2F2F]">
                Division
                <select
                  required
                  value={form.division}
                  onChange={handleChange}
                  name="division"
                  className="mt-2 h-[52px] w-full rounded-2xl border border-[#E6E6F2] px-4 outline-none focus:border-[#241B8E]"
                >
                  <option value="">Select division</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chattogram">Chattogram</option>
                  <option value="Rajshahi">Rajshahi</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Barishal">Barishal</option>
                  <option value="Rangpur">Rangpur</option>
                  <option value="Mymensingh">Mymensingh</option>
                </select>
              </label>

              <label className="text-sm font-medium text-[#2F2F2F]">
                City
                <input
                  required
                  value={form.city}
                  onChange={handleChange}
                  name="city"
                  placeholder="Dhaka"
                  className="mt-2 h-[52px] w-full rounded-2xl border border-[#E6E6F2] px-4 outline-none focus:border-[#241B8E]"
                />
              </label>
            </div>

            <div className="mt-5">
              <label className="text-sm font-medium text-[#2F2F2F]">
                Total product weight (kg)
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={customerWeightKg}
                  onChange={handleWeightChange}
                  placeholder={`${formattedTotalWeight} kg`}
                  className="mt-2 h-[52px] w-full rounded-2xl border border-[#E6E6F2] px-4 text-gray-700 outline-none focus:border-[#241B8E]"
                />
              </label>
            </div>

            <div className="mt-5">
              <label className="text-sm font-medium text-[#2F2F2F]">
                Order notes
                <textarea
                  value={form.notes}
                  onChange={handleChange}
                  name="notes"
                  rows="4"
                  placeholder="Any additional note for your order"
                  className="mt-2 w-full rounded-2xl border border-[#E6E6F2] px-4 py-3 outline-none focus:border-[#241B8E]"
                />
              </label>
            </div>

            {errorMessage && (
              <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="mt-6 inline-flex h-[56px] items-center justify-center rounded-full bg-black px-6 font-semibold text-white disabled:opacity-60"
            >
              {submitting ? "Placing order..." : "Place order"}
            </button>
          </form>

          <aside className="rounded-[32px] bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-bold text-[#1A1A1A]">Order summary</h2>
            <div className="mt-5 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-4 border-b border-[#F0EEF9] pb-4">
                  <div>
                    <p className="font-semibold text-[#1A1A1A]">{item.title}</p>
                    <p className="text-sm text-gray-500">Qty {item.quantity || 1}</p>
                  </div>
                  <p className="font-semibold text-[#1A1A1A]">
                    ৳ {(Number(item.price || 0) * (item.quantity || 1)).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3 text-sm text-[#3F3F3F]">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span className="font-semibold">৳ {subtotal.toFixed(2)}</span>
              </div>
              {coupon?.discountAmount ? (
                <div className="flex items-center justify-between text-emerald-700">
                  <span>Coupon ({coupon.code})</span>
                  <span className="font-semibold">- ৳ {discountAmount.toFixed(2)}</span>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <span>Coupon</span>
                  <span className="font-semibold">No coupon applied</span>
                </div>
              )}
              <div className="flex items-center justify-between">
                <span>Base shipping (Dhaka)</span>
                <span className="font-semibold">৳ {shippingBase.toFixed(2)}</span>
              </div>
              {extraShipping > 0 && (
                <div className="flex items-center justify-between text-amber-700">
                  <span>Extra shipping (outside Dhaka)</span>
                  <span className="font-semibold">+ ৳ {extraShipping.toFixed(2)}</span>
                </div>
              )}
              {weightShipping > 0 && (
                <div className="flex items-center justify-between text-amber-700">
                  <span>Weight-based shipping</span>
                  <span className="font-semibold">+ ৳ {weightShipping.toFixed(2)}</span>
                </div>
              )}
              {extraShipping > 0 && (
                <p className="mt-2 text-xs text-amber-700">
                  Extra 20 Tk will be added once the shipping division is outside Dhaka.
                </p>
              )}
              <div className="flex items-center justify-between border-t border-dashed pt-4 text-base font-bold text-[#1A1A1A]">
                <span>Total</span>
                <span>৳ {total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6 rounded-[24px] bg-[#F7F7FF] p-4 text-sm text-[#4B4B4B]">
              <p className="font-semibold text-[#1A1A1A]">Payment</p>
              <p className="mt-2">Cash on delivery (COD)</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Checkout;