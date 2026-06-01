import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "../../components/ToastContext";
import { useCustomerAuth } from "../../context/CustomerAuthContext";

const CustomerDashboard = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const { customer, loading, logout } = useCustomerAuth();

  useEffect(() => {
    if (!loading && !customer) {
      navigate("/customer-login");
    }
  }, [customer, loading, navigate]);

  const handleLogout = async () => {
    await logout();
    addToast("You have been logged out.", "success");
    navigate("/");
  };

  if (loading || !customer) {
    return (
      <section className="bg-[#F8F7FF] px-4 py-12">
        <div className="mx-auto max-w-2xl rounded-[32px] bg-white p-8 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#241B8E]">
            Loading account
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#F8F7FF] px-4 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-[32px] bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#241B8E]">
              Dashboard menu
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-[28px] border border-[#E6E6F2] bg-[#F7F7FF] p-4">
                <p className="text-sm font-semibold text-[#241B8E]">Orders</p>
                <nav className="mt-3 space-y-2 text-sm">
                  <Link
                    to="/my-orders"
                    className="block rounded-2xl bg-white px-4 py-3 font-semibold text-[#241B8E] shadow-sm"
                  >
                    Order list
                  </Link>
                </nav>
              </div>
              <div className="rounded-[28px] border border-[#E6E6F2] bg-white p-4">
                <p className="text-sm font-semibold text-[#241B8E]">Navigation</p>
                <nav className="mt-3 space-y-2 text-sm">
                  <Link
                    to="/customer-dashboard"
                    className="block rounded-2xl bg-[#F7F7FF] px-4 py-3 text-[#1A1A1A]"
                  >
                    Account overview
                  </Link>
                  <Link
                    to="/cart"
                    className="block rounded-2xl bg-[#F7F7FF] px-4 py-3 text-[#1A1A1A]"
                  >
                    View cart
                  </Link>
                  <Link
                    to="/shop"
                    className="block rounded-2xl bg-[#F7F7FF] px-4 py-3 text-[#1A1A1A]"
                  >
                    Continue shopping
                  </Link>
                </nav>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="w-full rounded-2xl border border-red-200 bg-white px-4 py-3 text-sm font-semibold text-red-600"
              >
                Logout
              </button>
            </div>
          </aside>

          <div className="rounded-[32px] bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#241B8E]">
              Customer dashboard
            </p>
            <h1 className="mt-3 text-3xl font-bold text-[#1A1A1A] md:text-4xl">
              Welcome back, {customer.firstName || customer.email}
            </h1>
            <p className="mt-3 text-sm text-[#5D5D68] sm:text-base">
              Manage your account and continue shopping from your personalized dashboard.
            </p>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              <div className="rounded-[28px] bg-[#F7F7FF] p-5">
                <p className="text-sm text-[#5D5D68]">Name</p>
                <p className="mt-2 text-lg font-semibold text-[#1A1A1A]">
                  {customer.firstName || ""} {customer.lastName || ""}
                </p>
              </div>
              <div className="rounded-[28px] bg-[#F7F7FF] p-5">
                <p className="text-sm text-[#5D5D68]">Email</p>
                <p className="mt-2 text-lg font-semibold text-[#1A1A1A]">{customer.email}</p>
              </div>
              <div className="rounded-[28px] bg-[#F7F7FF] p-5">
                <p className="text-sm text-[#5D5D68]">Status</p>
                <p className="mt-2 text-lg font-semibold text-emerald-700">Logged in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerDashboard;
