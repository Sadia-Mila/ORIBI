import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCustomerAuth } from "../../context/CustomerAuthContext";

export default function MyOrders() {
  const { customer, loading } = useCustomerAuth();
  const [orders, setOrders] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !customer) {
      navigate("/customer-login");
      return;
    }

    const fetchOrders = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/v1/orders/my", {
          method: "GET",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();

        if (!data.success) throw new Error(data.message || "Failed to load orders");

        setOrders(data.data || []);
      } catch (err) {
        setError(err.message || "Unknown error");
      }
    };

    if (customer) fetchOrders();
  }, [customer, loading, navigate]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;

  return (
    <div className="mx-auto max-w-6xl p-6">
      <h2 className="mb-4 text-2xl font-semibold">My Orders</h2>

      {!orders || orders.length === 0 ? (
        <div className="rounded-lg border bg-white p-6">You have no orders yet.</div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order._id} className="overflow-hidden rounded-[32px] border bg-white shadow-sm">
              <div className="bg-[#F7F7FF] px-6 py-5 sm:px-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-sm text-gray-500">Order Number</div>
                    <div className="text-xl font-semibold text-[#1A1A1A]">{order.orderNumber}</div>
                    <div className="text-sm text-gray-500">{new Date(order.createdAt).toLocaleString()}</div>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="rounded-full bg-white px-3 py-2 font-semibold text-[#241B8E]">{order.status}</span>
                    <span className="rounded-full bg-white px-3 py-2 font-semibold text-[#1A1A1A]">Payment: {order.paymentStatus}</span>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 p-6 sm:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-[#4B4B4B]">Customer</div>
                    <p className="text-sm text-[#6B6B6B]">{order.customerName}</p>
                    <p className="text-sm text-[#6B6B6B]">{order.customerEmail}</p>
                    <p className="text-sm text-[#6B6B6B]">{order.customerPhone}</p>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#4B4B4B]">Shipping address</div>
                    <p className="text-sm text-[#6B6B6B]">{order.shippingAddress}</p>
                    <p className="text-sm text-[#6B6B6B]">{order.shippingCity}, {order.shippingDivision}</p>
                    <p className="text-sm text-[#6B6B6B]">{order.shippingCountry}</p>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#4B4B4B]">Order notes</div>
                    <p className="text-sm text-[#6B6B6B]">{order.notes || "No notes provided."}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-[#4B4B4B]">Payment summary</div>
                    <div className="mt-2 grid gap-2 text-sm text-[#6B6B6B]">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>৳ {Number(order.subtotal || 0).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Discount</span>
                        <span>- ৳ {Number(order.discountAmount || 0).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>৳ {Number(order.shipping || 0).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between border-t border-[#E9E9F0] pt-2 font-semibold text-[#1A1A1A]"><span>Total</span>
                        <span>৳ {Number(order.total || 0).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#4B4B4B]">Coupon</div>
                    <p className="text-sm text-[#6B6B6B]">{order.couponCode || "No coupon applied"}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#E9E9F0] bg-[#F7F7FF] p-6">
                <div className="mb-4 text-sm font-semibold text-[#4B4B4B]">Items</div>
                <div className="space-y-4">
                  {Array.isArray(order.items) && order.items.map((item, idx) => (
                    <div key={idx} className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center">
                      <img src={item.thumbnail} alt={item.title} className="h-16 w-16 rounded-[18px] object-cover" />
                      <div>
                        <div className="font-semibold text-[#1A1A1A]">{item.title}</div>
                        <div className="text-sm text-[#6B6B6B]">Qty: {item.quantity} • ৳ {Number(item.price).toFixed(2)}</div>
                        <div className="text-sm text-[#6B6B6B]">Weight: {Number(item.weightKg || 0).toFixed(2)} kg</div>
                      </div>
                      <div className="text-sm font-semibold text-[#1A1A1A]">
                        ৳ {(Number(item.price || 0) * Number(item.quantity || 1)).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
