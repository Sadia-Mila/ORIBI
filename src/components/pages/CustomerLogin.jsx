import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "../../components/ToastContext";
import { useCustomerAuth } from "../../context/CustomerAuthContext";

const initialForm = {
  email: "",
  password: "",
};

const CustomerLogin = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const { customer, loading, refreshUser } = useCustomerAuth();
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && customer) {
      navigate("/customer-dashboard");
    }
  }, [customer, loading, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.email || !form.password) {
      addToast("Please enter your email and password.", "error");
      return;
    }

    setSubmitting(true);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/login",
        form,
        { withCredentials: true },
      );

      if (response.data?.success) {
        await refreshUser();
        addToast("Login successful.", "success");
        navigate("/customer-dashboard");
      } else {
        addToast(response.data?.message || "Login failed.", "error");
      }
    } catch (error) {
      addToast(error.response?.data?.message || "Unable to login right now.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-[#F8F7FF] px-4 py-12 md:py-16">
      <div className="mx-auto max-w-2xl rounded-[32px] bg-white p-8 shadow-sm md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#241B8E]">
          Customer login
        </p>
        <h1 className="mt-3 text-3xl font-bold text-[#1A1A1A] md:text-4xl">
          Welcome back
        </h1>
        <p className="mt-3 text-sm text-[#5D5D68] sm:text-base">
          Sign in to your account to access your customer dashboard and manage your orders.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <label className="block text-sm font-medium text-[#2F2F2F]">
            Email
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="mt-2 h-[52px] w-full rounded-2xl border border-[#E6E6F2] px-4 outline-none focus:border-[#241B8E]"
            />
          </label>

          <label className="block text-sm font-medium text-[#2F2F2F]">
            Password
            <input
              required
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="mt-2 h-[52px] w-full rounded-2xl border border-[#E6E6F2] px-4 outline-none focus:border-[#241B8E]"
            />
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex h-[56px] w-full items-center justify-center rounded-full bg-[#241B8E] px-6 font-semibold text-white disabled:opacity-65"
          >
            {submitting ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-[#4B4B4B]">
          <Link to="/shop" className="font-semibold text-[#241B8E]">
            Continue shopping
          </Link>
          <Link to="/" className="font-semibold text-[#241B8E]">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CustomerLogin;
